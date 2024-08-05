import React from "react";
import type { NextPage } from "next";
import PastDropItem from "../components/PastDropItem";
import Header from "../components/Header";
import Head from "next/head";

const Archive: NextPage = () => (
  <div className="flex flex-col min-h-screen bg-primary-dark text-fourth-green pt-16">
    <Head>
      <title>Archive</title>
    </Head>
    <Header />
    <main className="mx-8">
      <h1 className="text-2xl pt-4 pb-2 pragmatica-text uppercase">Archive</h1>
      <PastDropItem
        link="/collect/bridge"
        title="Bridge N3xtwave x Newtro"
        image="/bridge.mp4"
        description="<strong>North meets South</strong> <br>
          Inspired by the bridging technology of Layer 2 networks, this project connects two distant regions, South America and Europe, and their artists in this massive synchronized event.<br><br>
          Aura | Bleu281 | Cap'n | Francoise Gamma | ElementLee | StipinPixel | MostWrongKing | Santiago Ruau | Datura | Nicholas Dietrich | Lucas Lejeune | Danyrus | V5MT | Ed Marola | Moranicol | K0ch | Jotta | Pipi Universal | Ugo | MarianaJU | M.Suksu | Jerome Allavena
"
        protoworld="https://protoworld.io/n3xtwave-bridge"
      />
      <PastDropItem
        link="/collect/mirrorscape"
        title="Mirrorscape"
        image="/mirrorscape.mp4"
        description="<strong>“As above, so below”</strong><br> This mantra is a celestial hymn—an ethereal poetry that binds the realms unseen. Each twinkling light in the universe, a reflection of the stories etched in the sands of our atomic existence below. <br>As the moon mirrors the sun's tender glow, and the ripples on a pond echo the whispers of the wind, MIRRORSCAPE is a sonnet etched in stardust.<br><br>
gønz | Helio Santos | Fabrii2k | Salome Kunst | magnetismo | Young Bisman | Kiddo! | Leo Torcello| Ber Sektor | CAROXAURIO | sartorio pedro | Dani Leoni | SegúnJuanPedro| Gino | nuv1914 | Collector | Tater | Lu Martínez | THÖR | Lazaro
"
        protoworld="https://protoworld.io/mirrorscape"
      />
      <PastDropItem
        link="/collect/hashed-threads"
        title="Hashed Threads"
        image="/hashed-threads.mp4"
        description="<strong>-Hashed-</strong> The unalterable core of blockchain It embodies our commitment to trustful, real connections. It's the foundation upon which our community stands—a decentralized, collective endeavor where every artist is a vital node. <br>
          <strong>-Threads-</strong> Artists are weavers of the future, impacting reality. Education and information serve as the loom upon which our tapestry of tomorrow is woven. NewtroArts is not merely a platform for Latin American artists and W3B culture; it's a dynamic learning space where curiosity is nurtured, and expertise is cultivated. Through workshops, discussions, and shared resources, we empower our community.<br>
          Together, we will weave stories that resonate across the digital expanse, leaving an enduring legacy for generations to come.<br><br>
          Flora Marquez | Stani | Pimbyblu | Lilaempty | Morlacos | Magnetismo | Espinosa | La Delmas | Ekeko | Fernando Oropeza | Ed Marola | Vinito | Quilla Nina | Chamaland | The Myth | Alejandro Peters | Cap'n | M.Suksu | Halo Machine | Sulkian
          "
      />
      <PastDropItem
        link="/collect/mycelium-miscellany"
        title="Mycelium Miscellany"
        image="/mym.mp4"
        description="<strong>Latin American Art in a Vital Network</strong><br>
          In the vastness of Latin American land, a biological phenomenon occurs beneath our feet, almost invisible but essential for the ecosystem's balance: mycelium. An intricate system of fungal roots extends through the soil, connecting trees and plants in an underground network of collaboration. Through this network, forest elements exchange nutrients and strengthen each other, creating an interdependent community. <br>
          In Mycelium & Miscellany we immerse ourselves in an analogous world in the digital sphere, where 20 talented Latin American artists have converged to explore and celebrate the richness of creative collaboration and cultural diversity in the context of art on the W3B. <br><br>
          YON | Nesva | AVA | Rogerin | Jotta | Basaia | Tornado Rodriguez | Boyvoid | Santiago Ruau | BosqueGracias | Marietta | emilia Fantasia | Rustic Digital Art | Virkkk|Aempatia | Mote | Ludmila Pandolfo | Gabriel Nebular | Santiago Neymrqz | Dambass
          "
      />
    </main>
  </div>
);

export default Archive;
