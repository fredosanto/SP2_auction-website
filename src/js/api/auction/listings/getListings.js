import { API } from "../../../api/endpoints.js";
import { header } from "../../../api/header.js";

const api = API.listings.$;
const action = "?sort=created&limit=50&_active=true&_seller=true&_bids=true";

export async function getListings() {
  let path = api + action;
  const response = await fetch(path, { headers: header() });
  if (response.ok) {
    const listings = await response.json();
    // console.log(listings);
    return listings;
  }

  // console.log(listings);
}
