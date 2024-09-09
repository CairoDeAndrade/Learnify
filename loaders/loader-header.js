document.addEventListener("DOMContentLoaded", function () {
  let contentHTML = ``;

  if (isDevelopment()) {
    contentHTML = `
                <header class="toolbar primary-color">
                <a href="../classroom/classroom.html" class="link">
                  <h3 class="roboto-black">Learnify</h3>
                </a>
                <div class="user-info">
                  <span id="username"></span>
                  <img src="/assets/images/user.png" alt="User photo" />
                </div>
              </header>
      `;
  } else {
    contentHTML = `
                <header class="toolbar primary-color">
                <a href="../classroom/classroom.html" class="link">
                  <h3 class="roboto-black">Learnify</h3>
                </a>
                <div class="user-info">
                  <span id="username"></span>
                  <img src="/Learnify/assets/images/user.png" alt="User photo" />
                </div>
              </header>
      `;
  }

  document.body.insertAdjacentHTML("afterbegin", contentHTML);
});
