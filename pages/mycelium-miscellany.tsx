import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import NewDrop from "../components/NewDrop";
import { drop1MyceliumMiscellany } from "../mycelium-miscellany";
import TextWithHTML from "../components/TextWithHTML";
import { Address } from "viem";

const MyceliumMiscellany: NextPage = () => {
  return (
    <div className="bg-primary-dark text-fourth-green pt-20">
      <Head>
        <title>Mycelium Miscellany</title>
      </Head>
      <Header />
      <div className="flex flex-col mx-8">
        <h3 className="text-xl pragmatica-text uppercase md:text-2xl font-semibold">
          Mycelium Miscellany
        </h3>
        <div className="my-4">
          <TextWithHTML
            description="<strong>Latin American Art in a Vital Network</strong><br>
          In the vastness of Latin American land, a biological phenomenon occurs beneath our feet, almost invisible but essential for the ecosystem's balance: mycelium. An intricate system of fungal roots extends through the soil, connecting trees and plants in an underground network of collaboration. Through this network, forest elements exchange nutrients and strengthen each other, creating an interdependent community. <br>
          In Mycelium & Miscellany we immerse ourselves in an analogous world in the digital sphere, where 20 talented Latin American artists have converged to explore and celebrate the richness of creative collaboration and cultural diversity in the context of art on the W3B. <br><br>
          YON | Nesva | AVA | Rogerin | Jotta | Basaia | Tornado Rodriguez | Boyvoid | Santiago Ruau | BosqueGracias | Marietta | emilia Fantasia | Rustic Digital Art | Virkkk|Aempatia | Mote | Ludmila Pandolfo | Gabriel Nebular | Santiago Neymrqz | Dambass
          "
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-4 mx-8">
        {drop1MyceliumMiscellany.map((x, index) => (
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

export default MyceliumMiscellany;
