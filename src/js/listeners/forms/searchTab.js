"use strict";

export function tagSearch() {
  const searchBtn = document.querySelector("#searchBtn");

  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const searchInput = document.querySelector("#search");
    const tag = searchInput.value;
    window.location.href = `/src/pages/search/index.html?tag=${tag}`;
  });
}
