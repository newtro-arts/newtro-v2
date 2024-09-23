import Head from "next/head";
import Header from "@/components/Header";
import React from "react";
import CreatorPage from "@/components/CreatorPage/CreatorPage";

const Creators = () => {
  return (
    <>
      <Head>
        <title>Creators</title>
      </Head>
      <Header />
      <CreatorPage />
    </>
  );
}
export default Creators;
