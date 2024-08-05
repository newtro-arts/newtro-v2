import React from "react";
import type { NextPage } from "next";
import Header from "@/components/Header";
import Head from "next/head";
import LegacyCollections from "./LegacyCollections";

const ArchivePage: NextPage = () => (
  <div className="flex flex-col min-h-screen bg-primary-dark text-fourth-green pt-16">
    <Head>
      <title>Archive</title>
    </Head>
    <Header />
    <main className="mx-8">
      <h1 className="text-2xl pt-4 pb-2 pragmatica-text uppercase">Archive</h1>
      <LegacyCollections />
    </main>
  </div>
);

export default ArchivePage;
