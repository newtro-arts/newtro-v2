import React from "react";
import PastDropItem from "../PastDropItem";
import useCollections from "@/hooks/useCollections";
import getIpfsLink from "@/lib/ipfs/getIpfsLink";

const CollaborativeCollections = () => {
  const { collections } = useCollections();

  return (
    <div>
      {collections.map((collection: any) => (
        <PastDropItem
          link={`/collect/zora:${collection.metadata.newContract}`}
          title={collection.metadata?.name}
          image={getIpfsLink(collection.contractMetadata.image)}
          key={collection.metadata.newContract}
          description={collection.contractMetadata.description}
        />
      ))}
    </div>
  );
};

export default CollaborativeCollections;
