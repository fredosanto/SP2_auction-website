import { API } from "../../../api/endpoints.js";
import { header } from "../../../api/header.js";

const api = API.listings.$;

export async function getListings() {
  const tagSearch = new URLSearchParams(window.location.search).get("tag");
  const defaultQueryParams = {
    sort: "created",
    limit: 50,
    _active: "true",
    _seller: "true",
    _bids: "true",
    _tag: tagSearch ? tagSearch : "",
  };
  const queryParam = new URLSearchParams(defaultQueryParams);
  let path = api + `?${queryParam}`;
  const response = await fetch(path, { headers: header() });

  if (response.ok) {
    const listings = await response.json();
    // console.log(listings);
    return listings;
  }

  // console.log(listings);
}
