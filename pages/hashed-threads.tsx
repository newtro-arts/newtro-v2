import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import NewDrop from "../components/NewDrop";
import { drop2HashedThreads } from "../drop2-hashed-threads";
import TextWithHTML from "../components/TextWithHTML";

const HashedThreads: NextPage = () => {
  return (
    <div className="bg-primary-dark text-fourth-green pt-20">
      <Head>
        <title>Hashed Threads</title>
      </Head>
      <Header />
      <div className="flex flex-col mx-8">
        <h3 className="text-xl pragmatica-text uppercase md:text-2xl font-semibold">
          Hashed Threads
        </h3>
        <div className="my-4">
          <TextWithHTML
            description="<strong>-Hashed-</strong> The unalterable core of blockchain It embodies our commitment to trustful, real connections. It's the foundation upon which our community stands—a decentralized, collective endeavor where every artist is a vital node. <br>
          <strong>-Threads-</strong> Artists are weavers of the future, impacting reality. Education and information serve as the loom upon which our tapestry of tomorrow is woven. NewtroArts is not merely a platform for Latin American artists and W3B culture; it's a dynamic learning space where curiosity is nurtured, and expertise is cultivated. Through workshops, discussions, and shared resources, we empower our community.<br>
          Together, we will weave stories that resonate across the digital expanse, leaving an enduring legacy for generations to come.<br><br>
          Flora Marquez | Stani | Pimbyblu | Lilaempty | Morlacos | Magnetismo | Espinosa | La Delmas | Ekeko | Fernando Oropeza | Ed Marola | Vinito | Quilla Nina | Chamaland | The Myth | Alejandro Peters | Cap'n | M.Suksu | Halo Machine | Sulkian
          "
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-4 mx-8">
        {drop2HashedThreads.map((x, index) => (
          <div key={index} id={`${index}`}>
            <NewDrop
              name={x.name}
              description={x.description}
              image={x.webAssets.previewAsset.previewImage}
              index={index + 1}
              mime={x.webAssets.originalAsset.mime}
              contract={x.address}
              token_id={x.tokenId}
              dropName="hashed-threads"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HashedThreads;
