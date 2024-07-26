import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import NewDrop from "../components/NewDrop";
import TextWithHTML from "../components/TextWithHTML";
import { drop3Mirrorscape } from "../drop3-mirrorscape";

const Mirrorscape: NextPage = () => {
  return (
    <div className="bg-primary-dark text-fourth-green pt-20">
      <Head>
        <title>Mirrorscape</title>
      </Head>
      <Header />
      {/* <DropList drops={drops} showNames={false} bgColor="#eaeaea"/> */}
      <div className="flex flex-col mx-8">
        <h3 className="text-xl pragmatica-text uppercase md:text-2xl font-semibold">
          Mirrorscape
        </h3>
        <div className="my-4">
          <TextWithHTML
            description="<strong>“As above, so below”</strong><br> This mantra is a celestial hymn—an ethereal poetry that binds the realms unseen. Each twinkling light in the universe, a reflection of the stories etched in the sands of our atomic existence below. <br>As the moon mirrors the sun's tender glow, and the ripples on a pond echo the whispers of the wind, MIRRORSCAPE is a sonnet etched in stardust.<br><br>
gønz | Helio Santos | Fabrii2k | Salome Kunst | magnetismo | Young Bisman | Kiddo! | Leo Torcello| Ber Sektor | CAROXAURIO | sartorio pedro | Dani Leoni | SegúnJuanPedro| Gino | nuv1914 | Collector | Tater | Lu Martínez | THÖR | Lazaro"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-4 mx-8">
        {drop3Mirrorscape.map((x, index) => (
          <div key={index} id={`${index}`}>
            <NewDrop
              name={x.name}
              description={x.description}
              image={x.webAssets.previewAsset.previewImage}
              index={index + 1}
              mime={x.webAssets.originalAsset.mime}
              contract={x.address}
              token_id={x.tokenId}
              dropName="mirrorscape"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mirrorscape;
