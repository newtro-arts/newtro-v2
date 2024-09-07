import React from 'react';
import Head from "next/head";
import Header from '../Header';

const MinterPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-primary-dark text-fourth-green">
      <Head>
        <title>Minter</title>
      </Head>
      <Header />
      <main className="w-full px-8">
        <h1 className="text-2xl pt-4 pb-2 pragmatica-text uppercase text-center">We are working on it!</h1>
      </main>
  </div>
  )
}

export default MinterPage