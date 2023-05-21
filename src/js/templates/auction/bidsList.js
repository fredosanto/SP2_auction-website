"use strict";

export function bidsList(userBid) {
  const list = document.querySelector("#bids");
  //   let bid = document.createElement("div");
  list.classList = "latest-bids bg-primary p-3 rounded-4 my-3";
  console.log(userBid);

  list.innerHTML += `
  <div class="bid d-flex justify-content-between">
              <p class="d-inline-block text-uppercase">${userBid.bidderName}</p>
              <p class="d-inline-block">Bid: ${userBid.amount}</p>
            </div>
            <hr class="text-black" />
  `;
}
