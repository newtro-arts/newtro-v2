import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "@/components/Header";
import NewDrop from "@/components/NewDrop";
import TextWithHTML from "@/components/TextWithHTML";
import { Address } from "viem";
import useCollectionPage from "@/hooks/useCollectionPage";

const CollectionPage: NextPage = () => {
  const { name, description, tokens } = useCollectionPage();

  return (
    <div className="bg-primary-dark text-fourth-green pt-20">
      <Head>
        <title>{name}: Newtro Arts</title>
      </Head>
      <Header />
      <div className="flex flex-col mx-8">
        <h3 className="text-xl pragmatica-text md:text-2xl font-semibold">
          {name}
        </h3>
        <div className="my-4">
          <TextWithHTML description={description} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-4 mx-8">
        {tokens.map((x: any, index: number) => (
          <div key={index} id={`${index}`}>
            <NewDrop
              name={x.name}
              image={x.webAssets.previewAsset.previewImage}
              contract={x.address as Address}
              token_id={x.tokenId}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
