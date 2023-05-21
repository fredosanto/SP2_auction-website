import { getListingsById } from "../../js/api/auction/listings/getListingsById.js";
import { getBids } from "../../js/api/auction/listings/getBids.js";
import { renderAuctionListings } from "../../js/templates/auction/renderAuctionListings.js";
import { renderBids } from "../../js/templates/auction/renderBids.js";

export const listings = await getListingsById();
listings.forEach((listing) => renderAuctionListings(listing));

export const bids = await getBids();
// console.log(bids);
// bids.forEach((bids) => renderBids(bids));
// console.log(bids[0]);
// renderAuctionListings(bids);
// console.log(bids);

for (let i = 0; i < bids.length; i++) {
  //   console.log(bids[i].listing);
  const bidItem = bids[i].listing;
  // console.log(bidItem);
  renderBids(bidItem);
}
