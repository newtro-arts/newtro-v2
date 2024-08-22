import React from "react";
import { QuoteGrid } from "./QuoteItem";

const testimonialList = [
  {
    artistName: "@fakesudaka",
    artistPfp: "/fakesudaca.png",
    quote:
      "I've always been looking for the opportunity to expand the spaces to showcase my work, and I found in Newtro, not only that chance but also the opportunity to connect wth amazing artists and produce new ideas that I had in mind.",
    bg: "bg-tertiary-purple",
    textColor: "text-secondary-white",
  },
  {
    artistName: "@bynajimel",
    artistPfp: "/pfp.png",
    quote:
      "I love the sense of community you have and your organizational power. I learned about the NFT world and web3 around 2021, and I want to come back with so much strength. Work life and bills put me on hold for a bit, but this year I want to get back into it. It’s been a pleasure for me to see you build everything you do <3",
    bg: "bg-fifth-purple",
    textColor: "text-secondary-white",
  },
  {
    artistName: "@lemagnetismo",
    artistPfp: "/lemagnetismo.png",
    quote:
      "Newtro has inspired me greatly to presist with my NFTs and contribute however I can to the community, whether within or outside of Newtro. Meeting wonderful individuals who are a common purpose is immensely valuable to me, as they help us motivate each other and propel the collective forward as much as possible",
    bg: "bg-fourth-green",
    textColor: "text-primary-dark",
  },
  {
    artistName: "@bosquegracias",
    artistPfp: "/bosquegracias.png",
    quote:
      "Thank you very much for taking the time to co-create and always explain everything.",
    bg: "bg-tertiary-purple",
    textColor: "text-secondary-white",
  },
];
function CommunitySlider() {
  return (
    <div className="flex flex-col md:flex-row w-full lg:pb-4">
      <div>
        <QuoteGrid quotes={testimonialList} />
      </div>
    </div>
  );
}

export default CommunitySlider;
