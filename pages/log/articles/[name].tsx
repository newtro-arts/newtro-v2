import ArticlePage from "@/components/ArticlePage";
import Header from "@/components/Header";
import Head from "next/head";
import React from "react";

const Article = () => {
  return (
    <div className="w-full min-h-screen bg-primary-dark text-fourth-green pt-14">
      <Head>
        <title>Newtro Arts</title>
      </Head>
      <Header />
      <ArticlePage />
    </div>
  );
};

export default Article;
