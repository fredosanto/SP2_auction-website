"use strict";
import * as endpoint from "../../../js/api/endpoints.js";
import { header } from "../header.js";

const api = endpoint.API.auth.register;

export async function register(user) {
  const response = await fetch(api, {
    method: "POST",
    body: JSON.stringify(user),
    headers: header("application/json"),
  });

  if (response.ok) {
    alert("Success!");
    return await response.json();
  }

  throw new Error(`${response.status}: User already exists`);
}
