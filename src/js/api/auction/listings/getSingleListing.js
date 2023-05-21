import { API } from "../../endpoints.js";
import { header } from "../../header.js";

const action = "?_seller=true&_bids=true";

export async function getSingleListing(listingID) {
  const api = API.listings.id(listingID).$;
  let path = api + action;
  // console.log(path);

  const response = await fetch(path, { headers: header() });
  if (response.ok) {
    const listings = await response.json();
    console.log(listings);
    return listings;
  }
}
