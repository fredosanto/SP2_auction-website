"use strict";
import { API } from "../../endpoints.js";
import { header } from "../../header.js";

export async function add(item) {
  const api = API.listings.$;
  const success = document.querySelector(".add-success");

  if (!success) {
    console.warn("Did not find any element with class .add-success");
    return;
  }

  try {
    const response = await fetch(api, {
      method: "POST",
      body: JSON.stringify(item),
      headers: header("application/json"),
    });
    const listing = await response.json();
    if (response.ok) {
      success.classList.remove("d-none");
      return alert("Listing successfully added");
    }
  } catch (error) {
    console.error(error);
    return alert(`Woops, something went wrong: ${error}`);
  }
}

// export async function add(item) {
//   const api = API.listings.$;
//   const success = document.querySelector(".add-success");

//   const response = await fetch(api, {
//     method: "POST",
//     body: JSON.stringify(item),
//     headers: header("application/json"),
//   });

//   const listing = await response.json();

//   if (response.ok) {
//     console.log(listing);
//     success.classList.remove("d-none");
//     return alert("Listing successfully added");
//   } else {
//     console.log(listing);
//     return alert(`Woops, something went wrong: ${listing.errors[0].message}`);
//   }
// }
