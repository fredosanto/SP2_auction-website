const AUTH_TOKEN = "token";

export function hydrateBid() {
  const token = localStorage.getItem(AUTH_TOKEN);
  const container = document.querySelector("#bid");

  if (token) {
    container.classList.remove("d-none");
  }
}

hydrateBid();
