// import { getAuctionListings } from "./api/auction/auctionListings.js";
import { getListings } from "./api/auction/listings/getListings.js";
import { renderAuctionListings } from "./templates/auction/renderAuctionListings.js";

export const listings = await getListings();
listings.forEach((listing) => renderAuctionListings(listing));
