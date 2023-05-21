import { API } from "../../endpoints.js";
import { header } from "../../header.js";

const user = JSON.parse(localStorage.getItem("profile"));
const api = API.profiles.name(`${user.name}`).bids;
// const action =
//   "?sortOrder=desc&limit=20&_active=true&_seller=true&_bids=true&_listing=true&_media=true";
// const action = "?_listings=true&_seller=true&_media=true";
const action = "?_listings=true&_seller=true&_active=true&_media=true";

export async function getBids() {
  let path = api + action;
  // let path = api;
  const response = await fetch(path, { headers: header() });
  if (response.ok) {
    const listings = await response.json();
    console.log(listings);
    return listings;
  }
}
