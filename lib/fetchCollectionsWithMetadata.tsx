import getIpfsLink from "./ipfs/getIpfsLink";

const fetchCollectionsWithMetadata = async () => {
  try {
    const response = await fetch("/api/collections");
    if (!response.ok) {
      throw new Error("Failed to fetch collections");
    }
    const data = await response.json();
    const collectionsWithMetadata = await Promise.all(
      data.data.map(async (collection: any) => {
        try {
          const metadataResponse = await fetch(
            getIpfsLink(collection.args.contractURI)
          );
          if (!metadataResponse.ok) {
            throw new Error("Failed to fetch metadata");
          }
          const metadata = await metadataResponse.json();
          return { ...collection, contractMetadata: metadata };
        } catch (metadataError) {
          console.error("Error fetching metadata:", metadataError);
          return { ...collection, metadata: null };
        }
      }),
    );

    return collectionsWithMetadata;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default fetchCollectionsWithMetadata;
