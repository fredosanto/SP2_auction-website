"use strict";
import * as endpoint from "../../../js/api/endpoints.js";
import { header } from "../header.js";

export async function register(user) {
  const api = endpoint.API.auth.register;

  const response = await fetch(api, {
    method: "POST",
    body: JSON.stringify(user),
    headers: header("application/json"),
  });

  const status = await response.json();
  if (response.ok) {
    return alert("Success!");
    location.assign("/src/pages/login/index.html");
  }

  return alert(`Error ${status.statusCode}: ${status.errors[0].message}`);
}
