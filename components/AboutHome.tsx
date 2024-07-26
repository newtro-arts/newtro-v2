import Link from "next/link";
import React from "react";

const AboutHome = () => {
  return (
    <p className="px-8 text-2xl lg:text-3xl pt-0 pb-4 lg:pt-4 lg:pb-8 border-b border-b-fourth-green cursor-default">
      Newtro Arts aims to promote, educate and introduce latin american artists
      and cultural agents to blockchain technology.
      <Link
        href="/about"
        className=" align-middle leading-3 text-xs lg:text-lg cursor-pointer p-buttons mx-4 border hover:border-fourth-green bg-fourth-green text-primary-dark hover:bg-primary-dark hover:text-fourth-green"
      >
        More
      </Link>
    </p>
  );
};

export default AboutHome;
