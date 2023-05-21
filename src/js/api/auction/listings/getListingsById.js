import { API } from "../../endpoints.js";
import { header } from "../../header.js";

const user = JSON.parse(localStorage.getItem("profile"));
const api = API.profiles.name(`${user.name}`).listings;
const action = "?sortOrder=desc&limit=20&_seller=true&_bids=true";

export async function getListingsById() {
  let path = api + action;
  // let path = api;
  const response = await fetch(path, { headers: header() });
  if (response.ok) {
    const listings = await response.json();
    console.log(listings);
    return listings;
  }
}
