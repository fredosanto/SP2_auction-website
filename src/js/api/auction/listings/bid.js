"use strict";

import { API } from "../../endpoints.js";
import { header } from "../../header.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const api = API.listings.id(id).bids;
const path = "?_seller=true&_bids=true";

export async function bid(amount) {
  const url = api + path;

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(amount),
    headers: header("application/json"),
  });

  const status = await response.json();

  if (response.ok) {
    alert("Great! Your bid is placed!");
    window.location.reload();
    return pay;
  }
  console.log(status);
  alert(`Error ${status.statusCode}: ${status.errors[0].message}`);
}
