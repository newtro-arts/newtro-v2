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
          link={`/collect/zora:${collection.args.newContract}`}
          title={collection.args.name}
          image={getIpfsLink(collection.metadata.image)}
          key={collection.args.newContract}
          description={collection.metadata.description}
        />
      ))}
    </div>
  );
};

export default CollaborativeCollections;
