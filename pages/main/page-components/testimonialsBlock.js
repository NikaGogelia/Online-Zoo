"use strict";
// Testimonials Block Features
const testimonialsBlock = (data) => {
  const testimonialsProfiles = document.querySelector(".testimonial-profiles");
  const range = document.querySelector(".slider");
  const modal = document.querySelector(".modal");
  const modalContent = document.querySelector(".modal-content");
  let testimonialProfile;
  let profileItems = 0;

  // Testimonial Profile Items Quantity
  if (window.innerWidth < 680) {
    profileItems = 3;
  } else {
    profileItems = data.length;
  }

  // Display Testimonial Profiles Function
  const displayProfiles = (arr) => {
    if (arr.length > 0) {
      arr.map((item) => {
        const { img, name, localInfo, feedback } = item;
        const div = document.createElement("div");
        div.classList.add("testimonial-profile");
        div.innerHTML = `
                <div>
                    <div class="profile-header">
                        <img src="${img}" alt="${name}-img" />
                        <div>
                            <h4>${name}</h4>
                            <h5>${localInfo}</h5>
                        </div>
                    </div>
                    <div class="profile-description">
                        <p>${feedback}</p>
                    </div>
                </div>
                `;

        testimonialsProfiles.append(div);
        testimonialProfile = document.querySelectorAll(".testimonial-profile");

        if (window.innerWidth < 680) {
          testimonialProfile.forEach((profile, index) => {
            const { img, name, localInfo, feedback } = arr[index];
            profile.addEventListener("click", () => {
              modal.classList.add("open-modal");
              modalContent.innerHTML = `
              <div class="testimonial-profile modal-profile">
                  <div>
                      <div class="profile-header">
                          <div>
                            <img src="${img}" alt="${name}-img" />
                            <div>
                                <h4>${name}</h4>
                                <h5>${localInfo}</h5>
                            </div>
                          </div>
                          <img class="close-modal" src="../../assets/icons/x-icon.svg" alt="close-icon" />
                      </div>
                      <div class="profile-description">
                          <p>${feedback}</p>
                      </div>
                  </div>
              </div>
              `;

              document
                .querySelector(".close-modal")
                .addEventListener("click", () =>
                  modal.classList.remove("open-modal")
                );
            });
          });
        }
      });
    } else {
      testimonialsProfiles.innerHTML = "";
    }
  };

  // Load Initial Testimonial Profiles
  const arr = data.slice(0, profileItems);
  console.log(arr);
  displayProfiles(arr);

  // Testimonial Profiles Slider
  range.addEventListener("input", () => {
    let columnGap = 0;
    let scrollWidth = 0;
    let rangeValue = range.value;

    if (window.innerWidth < 1024) {
      columnGap = 20;
    } else {
      columnGap = 15;
    }

    scrollWidth += (testimonialProfile[0].clientWidth + columnGap) * rangeValue;
    testimonialsProfiles.style = `left: -${scrollWidth}px`;
  });
};

export default testimonialsBlock;
