import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

const Creators: NextPage = () => {
  return (
    <div className="px-9">
      <Head>
        <title>Creators</title>
      </Head>
      <Header />

      <h1 className="mt-24 mb-14 text-center text-fourth-green pragmatica-text uppercase font-semibold text-3xl/8 md:text-5xl/10 md:text-left">CREATORS</h1>

      <div className="flex flex-wrap justify-center gap-4 md:justify-start">
        {Array.from({ length: 16 }).map((_, i) => (
          <Link
            className='relative size-[9.875rem] bg-secondary-white border border-fourth-green rounded-tl-cards rounded-br-cards overflow-hidden md:size-[13.125rem] '
            href='#'
            key={i}>

            <Image alt='' src='/pfp.png' width={60} height={60} className="size-full object-cover" />

            <div className='absolute inset-0 flex opacity-0 cursor-pointer hover:opacity-85 transition duration-700 bg-fifth-purple'>
              <div className="flex flex-col justify-end w-full p-4">
                <p className="pragmatica-text text-fourth-green text-sm uppercase overflow-hidden text-ellipsis whitespace-nowrap md:text-base">
                  sweetman.eth
                </p>
              </div>
            </div>

          </Link>
        ))}
      </div>
    </div>
  );
};

export default Creators;
