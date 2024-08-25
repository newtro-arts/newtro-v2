import { Address } from "viem";
import fetchIpfsUri from "./ipfs/fetchIpfsUri";
import getFormattedNewtroToken from "./getFormattedNewtroToken";

const getSelectedDrop = async (
  chainId: number,
  collectionAddress: Address,
  tokenId: number
) => {
  try {
    const response = await fetch(
      `/api/token?collectionAddress=${collectionAddress}&tokenId=${tokenId}&chainId=${chainId}`
    );
    if (!response.ok) {
      return {};
    }
    const data = await response.json();
    const { tokenURI } = data.data.token;
    console.log("SWEETS data", data);

    const metadata = await fetchIpfsUri(tokenURI);
    console.log("SWEETS metadata", metadata);
    console.log("SWEETS data.data.token", data.data.token);

    const selectedDrop = getFormattedNewtroToken(
      data.data.token.contract,
      metadata,
      data.data.token
    );
    console.log("SWEETS selectedDrop", selectedDrop);

    return selectedDrop;
  } catch (error) {
    console.error("Error fetching selected drop:", error);
    throw error;
  }
};

export default getSelectedDrop;
