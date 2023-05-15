"use strict";

export function renderAuctionListings(listing) {
  const auction = document.getElementById("auction");
  let listingCard = document.createElement("div");

  let img = listing.media[0];

  listingCard.classList.add("col", "col-sm-12", "col-lg-6", "col-xl-4");

  listingCard.innerHTML = `
  <a
  href="/src/pages/listing/index.html?id=${listing.id}"
  class="text-primary text-decoration-none"
>
  <div
    class="listing p-3 border bg-black d-flex flex-column align-content-center justify-content-center rounded-3 m-auto listing-link"
  >
    <div class="listing-img_container m-auto">
      ${
        img
          ? `<img
        src="${img}"
        alt=""
        class="listing-img"
      />
        `
          : `<div class="no_image">NO IMAGE</div>`
      }
    </div>
    <div class="listing-header">
      <h2 class="text-center text-decoration-none m-auto p-3">
        ${listing.title}
      </h2>
    </div>
    <p class="m-auto text-muted">Listing created: ${listing.created.slice(
      0,
      10
    )}</p>
    <p class="m-auto text-muted">Deadline date: ${listing.endsAt.slice(
      0,
      10
    )}</p>
    <p class="m-auto text-muted">Owner: ${listing.seller.name}</p>
    <hr />
    <p class="m-auto p-3 price">Bids: ${listing.bids.length}</p>
  </div>
</a>`;

  auction.appendChild(listingCard);
}
