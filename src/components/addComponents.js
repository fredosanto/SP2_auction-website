import { hydrateNavbar } from "./navbar/hydrate/hydrateNavbar.js";
import { fetchUser } from "./bio/user/fetchUser.js";

export function init() {
  window.addEventListener("DOMContentLoaded", (e) => {
    hydrateNavbar();
    fetchUser();
  });
}

init();
