import Image from "next/image";
import React from "react";

const AboutHome = () => {
  return (
    <div className="flex flex-col lg:flex-row px-8 py-8 lg:py-12 items-center cursor-default pragmatica-text bg-tertiary-purple uppercase gap-x-4">
      <div className="relative w-full h-48 lg:h-80">
        <Image
          src="/Logo_VerdeTransparente.svg"
          alt="Newtro Arts"
          layout="fill"
          objectFit="fill"
          className="rounded-lg"
          priority
        />
      </div>
      <p className="text-2xl lg:text-4xl leading-tight	">
        Newtro Arts aims to promote, educate and introduce latin american
        artists and cultural agents to blockchain technology.
      </p>
    </div>
  );
};

export default AboutHome;
