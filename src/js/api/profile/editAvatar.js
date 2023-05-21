"use strict";

import { API } from "../endpoints.js";
import { header } from "../header.js";

export async function editAvatar(url) {
  const profile = JSON.parse(localStorage.getItem("profile"));
  const name = profile.name;
  const api = API.profiles.name(name).media;

  const response = await fetch(api, {
    method: "PUT",
    body: JSON.stringify(url),
    headers: header("application/json"),
  });

  const update = await response.json();

  if (response.ok) {
    return alert("success!");
  } else {
    return alert(`Woops, something went wrong: ${update.errors[0].message}`);
  }
}
