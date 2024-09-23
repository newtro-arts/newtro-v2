export const endpoints = [
  { apiType: "GET", route: "/api/collections" },
  {
    apiType: "GET",
    route: "/api/collection?collectionAddress={COLLECTION_ADDRESS}",
  },
  {
    apiType: "GET",
    route: "/api/creator/{CREATOR_ADDRESS}",
  },
  {
    apiType: "GET",
    route:
      "/api/token?collectionAddress={COLLECTION_ADDRESS}&tokenId={TOKEN_ID}",
  },
  {
    apiType: "GET",
    route: "/api/tokens",
  },
  {
    apiType: "GET",
    route: "/api/tokens?creatorAddress={CREATOR_ADDRESS}",
  },
];
