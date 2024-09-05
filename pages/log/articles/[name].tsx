import ArticlePage from "@/components/ArticlePage";
import Header from "@/components/Header";
import { bosqueGracias } from "@/sources/articles/bosque-gracias";
import Head from "next/head";
import React from "react";

const Article = () => {
  return (
    <div className="w-full min-h-screen bg-primary-dark text-fourth-green pt-14">
      <Head>
        <title>Newtro Arts</title>
      </Head>
      <Header />
      <ArticlePage article={bosqueGracias}/>
    </div>
  );
};

export default Article;
