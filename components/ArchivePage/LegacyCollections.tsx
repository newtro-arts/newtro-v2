import React from "react";
import PastDropItem from "../PastDropItem";
import { ARCHIVE_DROPS } from "./drops";

const LegacyCollections = () => (
  <div>
    {ARCHIVE_DROPS.map((drop) => (
      <PastDropItem
        key={drop.link}
        link={drop.link}
        title={drop.title}
        image={drop.image}
        description={drop.description}
        protoworld={drop.protoworld}
      />
    ))}
  </div>
);

export default LegacyCollections;
