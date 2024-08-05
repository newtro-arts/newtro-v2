import React from "react";
import PastDropItem from "../PastDropItem";
import { LEGACY_DROPS } from "../CollectionPage/drops";

const LegacyCollections = () => (
  <div>
    {LEGACY_DROPS.map((drop) => (
      <PastDropItem
        key={drop.link}
        link={drop.link}
        title={drop.title}
        video="/bridge.mp4"
        description={drop.description}
        protoworld={drop.protoworld}
      />
    ))}
  </div>
);

export default LegacyCollections;
