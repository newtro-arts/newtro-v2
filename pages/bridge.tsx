import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import NewDrop from "../components/NewDrop";
import drops from "../nextwave";
import TextWithHTML from "../components/TextWithHTML";

const Bridge: NextPage = () => {
  return (
    <div className="bg-primary-dark text-fourth-green pt-20">
      <Head>
        <title>Newtro Arts</title>
      </Head>
      <Header />
      <div className="flex flex-col mx-8">
        <h3 className="text-xl pragmatica-text md:text-2xl font-semibold">
          BRIDGE x N3XTWAVE
        </h3>
        <div className="my-4">
          <TextWithHTML
            description="<strong>North meets South</strong> <br>
            Inspired by the bridging technology of Layer 2 networks, this project connects two distant regions, South America and Europe, and their artists in this massive synchronized event.<br><br>
            Aura | Bleu281 | Cap'n | Francoise Gamma | ElementLee | StipinPixel | MostWrongKing | Santiago Ruau | Datura | Nicholas Dietrich | Lucas Lejeune | Danyrus | V5MT | Ed Marola | Moranicol | K0ch | Jotta | Pipi Universal | Ugo | MarianaJU | M.Suksu | Jerome Allavena"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-4 mx-8">
        {drops.map((x, index) => (
          <div key={index} id={`${index}`}>
            <NewDrop
              name={x.name}
              description={x.description}
              image={x.webAssets.previewAsset.previewImage}
              index={index + 1}
              mime={x.webAssets.originalAsset.mime}
              contract={x.address}
              token_id={x.tokenId}
              dropName="bridge"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bridge;
