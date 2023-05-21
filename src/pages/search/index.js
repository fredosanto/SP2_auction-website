import { getListings } from "../../js/api/auction/listings/getListings.js";
import { renderAuctionListings } from "../../js/templates/auction/renderAuctionListings.js";
import { titleSearch } from "../../js/listeners/forms/searchTab.js";

console.log("yiha");

export async function search() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const title = params.get("title");
  const listings = await getListings(title);
  console.log(listings);
  listings.forEach((listing) => renderAuctionListings(listing));
}

search();

titleSearch();
