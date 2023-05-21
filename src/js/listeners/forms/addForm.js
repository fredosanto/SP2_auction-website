"use strict";
import { add } from "../../api/auction/listings/add.js";

const addForm = document.querySelector("#add-form");
const titleError = document.querySelector(".title-error");
const dateError = document.querySelector(".date-error");

export async function addListing() {
  addForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const addForm = e.target;

    const title = addForm.addTitle.value;
    const description = addForm.addDescription.value;
    const tags = addForm.addTags.value.split(",").map((tag) => tag.trim());
    const media = addForm.addMedia.value ? [addForm.addMedia.value] : undefined;
    const date = new Date(addForm.addDate.value);
    const endsAt = date.toISOString();

    if (title.length < 4) {
      titleError.classList.remove("d-none");
    } else {
      titleError.classList.add("d-none");
    }

    if (endsAt.length < 4) {
      dateError.classList.remove("d-none");
    } else {
      dateError.classList.add("d-none");
    }

    const listing = {
      title,
      description,
      tags,
      media,
      endsAt,
    };
    console.log(listing);

    add(listing);
  });
}

addListing();
