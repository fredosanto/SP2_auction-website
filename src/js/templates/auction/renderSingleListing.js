"use strict";

export function renderSingleListings(listing) {
  const item = document.querySelector("#listing");
  let listingCard = document.createElement("div");
  listingCard.classList = "text-center";

  let img = listing.media[0];

  // listingCard.classList.add("col", "col-sm-12", "col-lg-6", "col-xl-4");

  listingCard.innerHTML = `
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
          <h2 class="text-center text-decoration-none m-auto p-3">
            ${listing.title}
          </h2>
          <p class="m-auto text-muted">Listing created: ${listing.created.slice(
            0,
            10
          )}</p>
          <p class="m-auto text-muted">Deadline date: ${listing.endsAt.slice(
            0,
            10
          )}</p>
          <p class="m-auto text-muted">Owner: ${listing.seller.name}</p>
          <p class="m-auto p-3 text-center product-description">${
            listing.description
          }</p>
          <hr />
          <p class="m-auto p-3 price">Bids: ${listing.bids.length}</p>
    `;

  item.appendChild(listingCard);
}
