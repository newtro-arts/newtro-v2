import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sponsors = () => {
  return (
    <div className="w-full lg:bg-fifth-purple flex flex-col lg:flex-row items-center justify-between py-5 px-0 lg:*:px-8">
      <h3 className="text-xl lg:text-2xl pragmatica-text uppercase w-full text-center lg:text-left mb-4 lg:mb-0">
        Newtro's supporters
      </h3>
      <div className="flex items-center justify-center lg:justify-end py-8 lg:py-0 bg-fifth-purple w-full">
        <Link href="https://zora.co/" target="_blank">
          <Image
            src="/zora.svg"
            width={150}
            height={72}
            alt="Zora"
            className="pr-8"
          />
        </Link>
        <Link href="https://optimism.io/" target="_blank">
          <Image
            src="/optimism.svg"
            width={72}
            height={72}
            alt="Optimism"
            className="pr-8"
          />
        </Link>
        <Link href="https://warpcast.com/~/channel/energy" target="_blank">
          <p className="text-2xl lg:text-4xl text-fourth-green pragmatica-text">
            ENERGY
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Sponsors;
