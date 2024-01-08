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
    let url = new URL(window.location.origin);
    console.log(url);
    console.log(url.pathname);

    url.pathname = "src/pages/login/index.html";
    const loginHref = url.toString();
    console.log(loginHref);
    window.location.href = loginHref;

    if (token) {
      remove(AUTH_TOKEN);
      remove(AUTH_PROFILE);
    }
  });
}
