import Head from "next/head";
import Header from "@/components/Header";
import CreatorsPage from "@/components/CreatorsPage";
import React from "react";

const Creators = () => (
  <>
    <Head>
      <title>Creators</title>
    </Head>
    <Header />
    <CreatorsPage />
  </>
);

export default Creators;
