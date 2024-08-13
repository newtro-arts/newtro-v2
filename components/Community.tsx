/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import VideoComponent from "./VideoComponent";
import CommunitySlider from "./CommunitySlider";
import Link from "next/link";

const Community = () => {
  return (
    <div className="max-w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:bg-tertiary-purple">
        <div className="flex">
          <div className="flex flex-col lg:bg-fifth-purple lg:rounded-tl-[150px] lg:rounded-br-[150px] lg:px-24 lg:py-4 mx-8 lg:mx-0 my-4 lg:my-0">
            <h5 className="text-xl text-center lg:text-left lg:text-2xl lg:pb-4 pragmatica-text uppercase">
              Meet Newtro Arts
            </h5>
            <p className="text-sm lg:text-base">
              The Newtro Arts collective is composed of people who participated
              in our Art and W3B Workshop. Today, we are more than 200 on-chain
              artists from Argentina and LATAM. Throughout the years, we have
              organized various joint encounters, streams, collective drops, IRL
              exhibitions, virtual galleries, trips, training sessions, and
              testing of new applications, among other activities.
              <br></br>
              <br></br>
              It is a space where, beyond building a common language among
              on-chain artists, we allow ourselves to openly collaborate,
              exchange information and experiences, thus boosting an impact that
              extends from the digital realm to the real world.
            </p>
            <Link href="/about" className="block lg:hidden w-fit self-center mr-4 cursor-pointer p-buttons border hover:border-fourth-green bg-fourth-green text-primary-dark hover:bg-primary-dark hover:text-fourth-green">
                More
            </Link>
            {/* <div className="flex py-8">
              <div className="mr-4 cursor-pointer p-buttons border hover:border-fourth-green bg-fourth-green text-primary-dark hover:bg-primary-dark hover:text-fourth-green">
                More
              </div>
              <div className="p-buttons cursor-pointer bg-tertiary-purple text-fourth-green hover:bg-fourth-green hover:text-tertiary-purple">
                Sign Up
              </div>
            </div> */}
          </div>
        </div>
        <VideoComponent />
      </div>
      <h5 className="w-full pragmatica-text uppercase text-center lg:text-left text-xl lg:text-2xl px-8 mt-8 mb-4">
        Artists Are Saying
      </h5>
      <CommunitySlider />
    </div>
  );
};

export default Community;
