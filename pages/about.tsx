import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutAccordion from "../components/AboutAccordion";

const about = [
  {
    title: "What We Do",
    content:
      'Newtro Arts is an organization of cultural managers based in Argentina working to promote, educate, and incorporate new Latin American artists and cultural agents into blockchain technology. The Newtro artist collective consists of artists who participated in our "Art and Web3" workshop, and who choose to be part of our collective engine for representing local culture within the virtual environment of Web3.',
  },
  {
    title: "Our Vision",
    content:
      "In Latin American culture, the free self-determination of nations is a necessary process for the organic emergence of sovereign cultural expressions. That is the nature of our culture, and promoting the autonomy and sovereignty of each user is part of our primary focus.",
  },
  {
    title: "Connecting Local and Global Communities",
    content:
      "As inter-community users on the web, we inhabit not just one but several communities. Within each of these human groups, the ways we relate and the goals we set vary. We are interested in connecting communities, understanding their issues, and proposing constant dialogue that drives the sustainability of artistic practice.",
  },
  {
    title: "Democratizing Art and Culture",
    content:
      "We understand that digital media and blockchain technology provide innovative tools to achieve the sustainability of artistic practice. Moving away from success-driven narratives in other art markets, not only can more artists participate in this expanded and more inclusive ecosystem of the art world, but also new and numerous collectors who, for the first time, engage in the practice of directly supporting their favorite artist.",
  },
];

const About: NextPage = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen max-w-full bg-primary-dark text-fourth-green pt-20">
      <Head>
        <title>About</title>
      </Head>

      <Header />
      {/* ABOUT */}
      <main className="flex flex-col lg:flex-row mt-2 w-full">
        <div className="text-xl leading-10 w-full">
          <h1 className="mx-8 text-xl tracking-wide text-center lg:text-left md:text-3xl xl:text-6xl uppercase pragmatica-text md:mt-0 pb-4 border-b">
            About Newtro Arts
          </h1>
          {about.map((item, index) => (
            <div key={index}>
              <AboutAccordion title={item.title} content={item.content} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default About;
