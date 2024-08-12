import React from "react";
import type { NextPage } from "next";
import PastDropItem from "../../components/PastDropItem";
import Header from "../../components/Header";
import Head from "next/head";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";

const Log: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-primary-dark text-fourth-green pt-16">
      <Head>
        <title>Log</title>
      </Head>
      <Header />
      <main className="mx-8">
        <h1 className="text-2xl pt-4 pb-2 pragmatica-text uppercase">LOG</h1>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mb-4">
            <div className="col-span-1 lg:col-span-2 row-span-2 bg-fifth-purple">
              <Link
                href="/log/articles/bosque-gracias"
                className="text-secondary-white"
                target="_blank"
              >
                <Image
                  src="/membership.png"
                  width={500}
                  height={300}
                  alt="Bosquegracias"
                  className="aspect-[16/9] w-full object-cover mb-4"
                />
                <div className="flex flex-col px-4 pb-4">
                  <p>Residence</p>
                  <h2 className="text-2xl font-bold pragmatica-text">
                    Bosquegracias
                  </h2>
                  <p className="text-sm mb-2">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="text-xs">
                    John Doe - NFT Artist
                    <br />
                    Feb 1, 2024 - 5 min read
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Log;
