const base = "https://api.noroff.dev/api/v1/auction";

export const API = {
  auth: { register: base + "/auth/register", login: base + "/auth/login" },
  profiles: {
    $: base + "/profiles",
    name: (name) => {
      const nameBase = base + "/profiles/" + name;
      return {
        $: nameBase,
        media: nameBase + "/media",
        listings: nameBase + "/listings",
        bids: nameBase + "/bids",
        credits: nameBase + "/credits",
      };
    },
  },
  listings: {
    /** GET - This endpoint returns a single listing. */
    $: base + "/listings",
    id: (id) => {
      const listingsBase = base + "/listings/" + id;
      return {
        /**
         * Signle Entry
         *
         * [GET] - This endpoint returns a single listing
         *
         * [POST] - This endpoint allows for the creation of a new listing. The title and endsAt properties are required, but we recommend including the description and media properties as well. */
        $: listingsBase,
        /** Supports POST */
        bids: listingsBase + "/bids",
      };
    },
  },
};

// console.log(API.profiles.$);

// console.log(API.listings.id(4).$);
