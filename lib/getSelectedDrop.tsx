import { Address } from "viem";
import fetchIpfsUri from "./ipfs/fetchIpfsUri";

const getSelectedDrop = async (collectionAddress: Address, tokenId: number) => {
  try {
    const response = await fetch(
      `/api/token?collectionAddress=${collectionAddress}&tokenId=${tokenId}`
    );
    if (!response.ok) {
      return {};
    }
    const data = await response.json();
    const { tokenURI } = data.data.token;
    const metadata = await fetchIpfsUri(tokenURI);
    const selectedDrop = {
      address: data.data.token.contract.address,
      description: metadata.description,
      name: metadata.name,
      tokenId: data.data.token.tokenId,
      minter: data.data.token.salesConfig.address,
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
    };
    return selectedDrop;
  } catch (error) {
    console.error("Error fetching selected drop:", error);
    throw error;
  }
};

export default getSelectedDrop;
