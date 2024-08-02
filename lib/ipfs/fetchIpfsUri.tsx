import getIpfsLink from "./getIpfsLink";

const fetchIpfsUri = async (uri: string): Promise<any> => {
  const urlToFetch = getIpfsLink(uri);
  try {
    const response = await fetch(urlToFetch);
    if (!response.ok) {
      throw new Error(`Failed to fetch IPFS data. Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching IPFS data:", error);
    throw error;
  }
};

export default fetchIpfsUri;
