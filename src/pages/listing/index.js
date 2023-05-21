import { getSingleListing } from "../../js/api/auction/listings/getSingleListing.js";
import { renderSingleListings } from "../../js/templates/auction/renderSingleListing.js";
import { bidsList } from "../../js/templates/auction/bidsList.js";
import { hydrateBid } from "../../components/bid/hydrateBid.js";
import { addBid } from "../../js/listeners/forms/bidForm.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const listing = await getSingleListing(id);

renderSingleListings(listing);

const singleBid = listing.bids;
singleBid.forEach((bid) => bidsList(bid));

addBid();
