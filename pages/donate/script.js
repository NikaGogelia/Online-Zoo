"use strict";
const amountContainer = document.querySelector(".timeline--inner");
const amountInput = document.querySelector("input[type=number]");

const amountArr = [2000, 1000, 500, 250, 100, 50, 25];
let initialAmount = amountArr[4];
amountInput.value = initialAmount;

// Display Amount Bullets With Values Function
const displayAmountBullets = (arr) => {
  arr.map((amount) => {
    const div = document.createElement("div");
    div.classList.add("timeline--inner-pin");

    div.innerHTML = `
    <span class="amount">$${amount}</span>
    <span class="timeline-border"></span>
    `;

    amountContainer.append(div);
    // Choose Initial Amount
    chooseAmount(initialAmount);

    // Change Amount On Input Value Change
    amountInput.addEventListener("change", () => {
      chooseAmount(+amountInput.value);
    });

    // Change Amount On Amount Click
    div.addEventListener("click", () => {
      chooseAmount(amount);
    });
  });
};

// Choose Amount Function
const chooseAmount = (amount) => {
  const timelineBorder = document.querySelectorAll(".timeline-border");
  const amountValue = document.querySelectorAll(".amount");

  amountInput.value = amount;
  if (+amountInput.value === amount) {
    timelineBorder.forEach((item) => item.classList.remove("active-border"));
    amountValue.forEach((item) => item.classList.remove("active-amount"));
    for (let i = 0; i < timelineBorder.length; i++) {
      if (amountValue[i].innerHTML === `$${amount}`) {
        timelineBorder[i].classList.add("active-border");
        amountValue[i].classList.add("active-amount");
      }
    }
  } else {
    amountValue.forEach((item) => item.classList.remove("active-amount"));
    timelineBorder.forEach((item) => item.classList.remove("active-border"));
  }
};

displayAmountBullets(amountArr);
