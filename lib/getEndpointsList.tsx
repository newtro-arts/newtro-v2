export const endpoints = [
  { apiType: "GET", route: "/api/collections" },
  {
    apiType: "GET",
    route: "/api/collection?collectionAddress={COLLECTION_ADDRESS}",
  },
  {
    apiType: "GET",
    route:
      "/api/token?collectionAddress={COLLECTION_ADDRESS}&tokenId={TOKEN_ID}",
  },
];
