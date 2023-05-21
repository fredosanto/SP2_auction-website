// import { getAuctionListings } from "./api/auction/auctionListings.js";
import { getListings } from "./api/auction/listings/getListings.js";
import { renderAuctionListings } from "./templates/auction/renderAuctionListings.js";
import { tagSearch } from "./listeners/forms/searchTab.js";

export const listings = await getListings();
console.log(listings);
listings.forEach((listing) => renderAuctionListings(listing));

tagSearch();
