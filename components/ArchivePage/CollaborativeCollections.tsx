import React from "react";
import PastDropItem from "../PastDropItem";
import useCollections from "@/hooks/useCollections";

const CollaborativeCollections = () => {
  const { collections } = useCollections();
  console.log("Sweets collections", collections);

  return (
    <div>
      {collections.map((collection: any) => (
        <PastDropItem
          link={`/collect/zora:${collection.args.newContract}`}
          title={collection.args.name}
          image="/bridge.mp4"
          key={collection.args.newContract}
          description="<strong>North meets South</strong> <br>
          Inspired by the bridging technology of Layer 2 networks, this project connects two distant regions, South America and Europe, and their artists in this massive synchronized event.<br><br>
          Aura | Bleu281 | Cap'n | Francoise Gamma | ElementLee | StipinPixel | MostWrongKing | Santiago Ruau | Datura | Nicholas Dietrich | Lucas Lejeune | Danyrus | V5MT | Ed Marola | Moranicol | K0ch | Jotta | Pipi Universal | Ugo | MarianaJU | M.Suksu | Jerome Allavena
"
        />
      ))}
    </div>
  );
};

export default CollaborativeCollections;
