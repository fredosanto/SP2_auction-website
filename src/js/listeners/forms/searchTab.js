"use strict";

export function titleSearch() {
  const searchBtn = document.querySelector("#searchBtn");

  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const searchInput = document.querySelector("#search");
    const title = searchInput.value;
    window.location.href = `/src/pages/search/index.html?title=${title}`;
  });
}
