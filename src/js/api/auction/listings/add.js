"use strict";
import { API } from "../../endpoints.js";
import { header } from "../../header.js";

export async function add(item) {
  const api = API.listings.$;
  const success = document.querySelector(".add-success");
  try {
    const response = await fetch(api, {
      method: "POST",
      body: JSON.stringify(item),
      headers: header("application/json"),
    });

    if (response.ok) {
      const listing = await response.json();
      console.log(listing);
      success.classList.remove("d-none");
    }
  } catch (error) {
    console.log(error);
  }
}
