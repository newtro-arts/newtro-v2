import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutHome = () => {
  return (
    <div className="flex px-8 py-8 lg:py-12 items-center cursor-default pragmatica-text bg-tertiary-purple uppercase gap-x-16">
      <Image
        src="/Logo_VerdeTransparente.svg"
        width={295}
        height={164}
        alt="Newtro Arts"
      />
      <p className="text-2xl lg:text-4xl">
        Newtro Arts aims to promote, educate and introduce latin american
        artists and cultural agents to blockchain technology.
      </p>
    </div>
  );
};

export default AboutHome;
