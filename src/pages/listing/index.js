import "../../components/bid/hydrateBid.js";
import { getSingleListing } from "../../js/api/auction/listings/getSingleListing.js";
import { addBid } from "../../js/listeners/forms/bidForm.js";
import { tagSearch } from "../../js/listeners/forms/searchTab.js";
import { bidsList } from "../../js/templates/auction/bidsList.js";
import { renderSingleListings } from "../../js/templates/auction/renderSingleListing.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const listing = await getSingleListing(id);

renderSingleListings(listing);

const title = document.querySelector("#bidHeader");
if (title && listing.bids.length === 0) {
  title.innerHTML = "No bids yet...";
}

const singleBid = listing.bids;
singleBid.forEach((bid) => bidsList(bid));

addBid();
tagSearch();
