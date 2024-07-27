import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../../components/Header";
import NewDrop from "../../components/NewDrop";
import TextWithHTML from "../../components/TextWithHTML";
import { allDrops } from "../../allDrops";

const Mirrorscape: NextPage = () => {
  return (
    <div className="bg-primary-dark text-fourth-green pt-20">
      <Head>
        <title>Explore All</title>
      </Head>
      <Header />
      <div className="flex flex-col mx-8">
        <h3 className="text-xl pragmatica-text uppercase md:text-2xl font-semibold pb-8">
          Explore All
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-4 mx-8">
        {allDrops.map((x, index) => (
          <div key={index} id={`${index}`}>
            <NewDrop
              name={x.name}
              description={x.description}
              image={x.webAssets.previewAsset.previewImage}
              index={index + 1}
              mime={x.webAssets.originalAsset.mime}
              contract={x.address}
              token_id={x.tokenId}
              dropName={x.dropId}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mirrorscape;
