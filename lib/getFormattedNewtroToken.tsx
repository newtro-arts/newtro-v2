import { ZORA_TIMED_SALE_STRATEGY_IMPLEMENTATION } from "./consts";

const getFormattedNewtroToken = (contract: any, metadata: any, token: any) => ({
  address: contract.address,
  description: metadata.description,
  name: metadata.name,
  tokenId: token.tokenId,
  minter:
    token?.salesConfig?.address || ZORA_TIMED_SALE_STRATEGY_IMPLEMENTATION,
  webAssets: {
    originalAsset: {
      mime: metadata.content.mime || "",
      originalAsset: metadata.content.uri,
    },
    previewAsset: {
      mime: "image/png",
      previewImage: metadata.image,
    },
  },
});

export default getFormattedNewtroToken;
