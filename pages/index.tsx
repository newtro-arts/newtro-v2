import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewDrop from "../components/NewDrop";
import Marquee from "react-fast-marquee";
import AboutHome from "../components/AboutHome";
import MediaHero from "../components/MediaHero";
import Community from "../components/Community";
import Link from "next/link";
import Sponsors from "../components/Sponsors";
import Membership from "../components/Membership";
import FeaturedMintsSection from "@/components/Sections/FeaturedMintsSection";

const Home: NextPage = () => {
  return (
    <div className="bg-primary-dark text-fourth-green max-w-full pt-14 flex flex-col gap-y-4 lg:overflow-hidden cursor-default ">
      <Head>
        <title>Newtro Arts</title>
      </Head>
      <Header />
      <MediaHero />
      <Link href="https://linktr.ee/newtroarts" target="_blank">
        <Marquee className="marquee max-w-full border-y-[1px]">
          ANOTATE AL TALLER ARTE Y W3B • ANOTATE AL TALLER ARTE Y W3B • ANOTATE
          AL TALLER ARTE Y W3B •{" "}
        </Marquee>
      </Link>
      <AboutHome />
      <FeaturedMintsSection />
      {/*       <Membership/>
       */}
      <Community />
      <Sponsors />
    </div>
  );
};

export default Home;
