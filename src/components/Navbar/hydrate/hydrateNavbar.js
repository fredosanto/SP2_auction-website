import { remove } from "../../../js/token/remove.js";

const AUTH_TOKEN = "token";
const AUTH_PROFILE = "profile";

export function hydrateNavbar() {
  const token = localStorage.getItem(AUTH_TOKEN);
  const loginBtn = document.querySelector(".login-btn");
  const profileBtn = document.querySelector(".profile-btn");
  //   console.log(loginBtn);
  if (token) {
    loginBtn.innerHTML = `Logout`;
    profileBtn.classList.remove("d-none");
  }
  loginBtn.addEventListener("click", (e) => {
    console.log("clicked");
    if (token) {
      remove(AUTH_TOKEN);
      remove(AUTH_PROFILE);
    }
    if (window.location.pathname === "/src/pages/profile/index.html") {
      window.location.href = "../login/index.html";
    }
    if (window.location.pathname === "/index.html") {
      window.location.href = "/src/pages/login/index.html";
    }
    if (window.location.pathname === "/src/pages/listing/index.html") {
      window.location.href = "../login/index.html";
    }
  });
}
