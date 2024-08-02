import { Address } from "viem";
import fetchIpfsUri from "./ipfs/fetchIpfsUri";

const getSelectedDrop = async (collectionAddress: Address, tokenId: number) => {
  try {
    console.log("SWEETS GETTING SELECTED DROP", collectionAddress, tokenId);

    const response = await fetch(
      `/api/token?collectionAddress=${collectionAddress}&tokenId=${tokenId}`
    );
    if (!response.ok) {
      return {};
    }
    const data = await response.json();
    console.log("SWEETS data", data);

    const { tokenURI } = data.data.token;
    const metadata = await fetchIpfsUri(tokenURI);
    const selectedDrop = {
      address: data.data.token.contract.address,
      description: metadata.description,
      dropId: "TODO",
      name: metadata.name,
      tokenId: data.data.token.tokenId,
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
