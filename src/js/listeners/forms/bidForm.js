"use strict";

import { bid } from "../../api/auction/listings/bid.js";

const bidForm = document.querySelector("#bid-form");

export async function addBid() {
  bidForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const bidForm = e.target;

    const amount = Number(bidForm.bidAmount.value);

    const bidAmount = {
      amount,
    };

    bid(bidAmount);
  });
}
