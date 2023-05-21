import { API } from "../endpoints.js";
import { header } from "../header.js";
import { save } from "../../token/save.js";

const api = API.auth.login;

export async function login(user) {
  const response = await fetch(api, {
    method: "POST",
    body: JSON.stringify(user),
    headers: header("application/json"),
  });

  if (response.ok) {
    const profile = await response.json();
    save("token", profile.accessToken);
    save("profile", profile);
    alert("Logged in");
    location.assign("/index.html");
    return profile;
  }
  alert("Username or password is incorrect");
  throw new Error(`${response.status} Username or password is incorrect`);
}
