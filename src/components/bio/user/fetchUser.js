import { API } from "../../../js/api/endpoints.js";
import { header } from "../../../js/api/header.js";

export async function fetchUser() {
  const profile = JSON.parse(localStorage.getItem("profile"));
  if (!profile) return;

  const endpoint = API.profiles.name(profile.name).$;
  const res = await fetch(endpoint, { headers: header() });
  console.log(res);
  const userObj = await res.json();
  //   const userObj = await fetch(endpoint, option);
  if (!userObj) return;
  console.log(userObj);

  const userContainer = document.querySelector("#user-profile");
  const userName = document.querySelector("#username");
  const credit = document.querySelector("#credit");
  userContainer.classList.remove("d-none");
  userName.innerHTML = userObj.name;
  credit.innerHTML = `Credits: ${userObj.credits},-`;
}
