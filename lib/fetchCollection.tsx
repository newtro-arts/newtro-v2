import { Address } from "viem";

const fetchCollaborativeCollection = async (contractAddress: Address) => {
  try {
    const response = await fetch(
      `/api/collection?collectionAddress=${contractAddress}`
    );
    if (!response.ok) {
      throw new Error(`Error fetching collection data: ${response.statusText}`);
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching collaborative collection data:", error);
  }
};

export default fetchCollaborativeCollection;
