import React from "react";
import Link from "next/link";

const MediaHero = () => {
  return (
    <div className="max-w-full cursor-default">
      <div className="relative hidden md:block" style={{ height: "80vh" }}>
        <div className="relative w-full h-full flex justify-center items-center">
          <div className="w-full h-full relative">
            <video
              autoPlay
              muted
              loop
              className="absolute inset-0 w-full h-full object-cover"
              src="https://pub-45a4182a1c2b41f3a18151a5e2a4ce29.r2.dev/community%2Fredux%20169.mov"
            />
            <div className="absolute bottom-0 left-8 pb-4">
              <h5 className="text-fourth-green text-xl md:text-2xl pl-[6px]">
                Artist Residency
              </h5>
              <div className="flex items-end">
  <h5 className="text-xl md:text-4xl xl:text-8xl leading-none media-hero text-white">
    BOSQUEGRACIAS
  </h5>
  <Link
    href="/log"
    className="ml-2 mb-2 lg:mb-4 ibm-text text-xs h-fit leading-none md:text-md xl:text-lg cursor-pointer rounded-tl-[15px] rounded-br-[15px] bg-fourth-green text-primary-dark hover:border hover:border-fourth-green hover:bg-primary-dark hover:text-fourth-green p-buttons flex items-center"
  >
    Enter
  </Link>
</div>

            </div>
          </div>
        </div>
      </div>
      <div className="relative block md:hidden" style={{ height: "80vh" }}>
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
          src="https://pub-45a4182a1c2b41f3a18151a5e2a4ce29.r2.dev/community%2Fbosque%20gracias_redux.mov"
        />
        <div className="absolute bottom-0 left-2 pb-4">
          <h5 className="text-fourth-green text-lg">Residence</h5>
          <h5 className="text-xl lg:text-3xl media-hero text-white">
            BOSQUEGRACIAS
            <Link
              href="/log"
              className="ibm-text align-middle leading-3 text-xs md:text-md xl:text-lg cursor-pointer rounded-tl-[15px] rounded-br-[15px] bg-fourth-green text-primary-dark hover:border hover:border-fourth-green hover:bg-primary-dark hover:text-fourth-green p-buttons font-semibold mx-4"
            >
              Enter
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default MediaHero;
