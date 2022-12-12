"use strict";
// Pets Block Features
const petsBlock = (data) => {
  const petCards = document.querySelector(".pet-cards");
  const prevNextButton = document.querySelectorAll(".prev-next-button");
  let columns = 0;

  // Pet Card Columns
  if (window.innerWidth < 680) {
    columns = 4;
  } else {
    columns = 6;
  }

  // Sort Pets Array
  let petsData = data.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  // Slide Animation Function
  const slideAnimation = (className, button) => {
    button.disabled = true;
    const delay = 500;
    petCards.classList.add(className);
    setTimeout(() => {
      petCards.classList.remove(className);
      const arr = chooseRandomItem(petsData, columns);
      displayPetCards(arr);
    }, delay);
    setTimeout(() => (button.disabled = false), delay + 800);
  };

  // Display Pet Cards Function
  const displayPetCards = (arr) => {
    petCards.innerHTML = "";
    if (arr.length > 0) {
      arr.map((item) => {
        const { name, area, food, img } = item;
        const div = document.createElement("div");
        div.classList.add("pet-card");

        div.innerHTML = `
        <img src="${img}" alt="${name}" />
        <div class="pet-card-desc">
          <div>
            <h4>${name}</h4>
            <p>${area}</p>
          </div>
          <img src="${
            food === "meat"
              ? "../../assets/icons/meet-fish.svg"
              : "../../assets/icons/banana-bamboo.svg"
          }" />
        </div>
        `;
        petCards.append(div);
      });
    } else {
      petCards.innerHTML = "";
    }
  };

  // Choose Items From Pet Cards Array Randomly For Slideshow
  const chooseRandomItem = (arr, col) => {
    const res = [];
    for (let i = 0; i < col; ) {
      const random = Math.floor(Math.random() * arr.length);
      if (res.indexOf(arr[random]) !== -1) {
        continue;
      }
      res.push(arr[random]);
      i++;
    }
    return res;
  };

  // Load Initial Pet Cards
  const arr = petsData.slice(0, columns);
  displayPetCards(arr);

  // Previous && Next Slideshow Button Features
  prevNextButton.forEach((button) => {
    button.addEventListener("click", () => {
      switch (button.id) {
        case "prev":
          slideAnimation("slide-right", button);
          break;
        case "next":
          slideAnimation("slide-left", button);
          break;
      }
    });
  });
};

export default petsBlock;
