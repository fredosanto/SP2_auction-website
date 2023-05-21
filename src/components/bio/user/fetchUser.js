import { API } from "../../../js/api/endpoints.js";
import { header } from "../../../js/api/header.js";

export async function fetchUser() {
  const profile = JSON.parse(localStorage.getItem("profile"));
  if (!profile) return;

  const endpoint = API.profiles.name(profile.name).$;
  const res = await fetch(endpoint, { headers: header() });

  const userObj = await res.json();

  if (!userObj) return;

  const userContainer = document.querySelector("#user-profile");
  const userName = document.querySelector("#username");
  const credit = document.querySelector("#credit");
  const img = document.querySelector(".profile-img");
  credit.innerHTML = `Credits: ${userObj.credits},-`;

  if (userContainer) {
    userContainer.classList.remove("d-none");
    credit.innerHTML = `Credits: ${userObj.credits},-`;
    userName.innerHTML = userObj.name;
    img.src = `${userObj.avatar}`;
  }
}
