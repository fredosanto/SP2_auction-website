import { getListings } from "../../js/api/auction/listings/getListings.js";
import { renderAuctionListings } from "../../js/templates/auction/renderAuctionListings.js";
import { tagSearch } from "../../js/listeners/forms/searchTab.js";

export async function getAndRenderListings() {
  const listings = await getListings();
  listings.forEach((listing) => renderAuctionListings(listing));
}

getAndRenderListings();
tagSearch();
