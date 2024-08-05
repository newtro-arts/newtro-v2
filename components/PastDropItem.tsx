import React from "react";
import Image from "next/image";
import Link from "next/link";
import TextSplitter from "./TextSplitter";
import TextWithHTML from "./TextWithHTML";

interface PastDropItemProps {
  link: string;
  title: string;
  image: string;
  description: string;
  protoworld?: string;
}

export default function PastDropItem({
  link,
  title,
  image,
  description,
  protoworld,
}: PastDropItemProps) {
  console.log("SWEETS image", image);
  return (
    <div className="flex flex-col lg:flex-row w-full my-4">
      <div className="flex justify-center object-scale-down h-full lg:w-[50%]">
        {image.includes("ipfs") ? (
          <Image alt={title} src={image} height={300} width={300} />
        ) : (
          <video autoPlay muted loop>
            <source src={image} />
          </video>
        )}
      </div>
      <div className="lg:w-[50%] lg:ml-4 mt-4 lg:mt-0 border border-fourth-green p-8">
        <div className="flex flex-col h-full">
          <h3 className="text-2xl font-semibold leading-5 mb-4 pragmatica-text uppercase">
            {title}
          </h3>
          <div>
            <TextWithHTML description={description} />
            <div>
              <Link
                href={link}
                className="cursor-pointer p-buttons border my-4 mr-2 w-fit bg-fourth-green text-primary-dark hover:bg-primary-dark hover:border-fourth-green hover:text-fourth-green"
              >
                Visit Drop
              </Link>
              {protoworld && (
                <Link
                  href={protoworld ? protoworld : "/"}
                  target="_blank"
                  className="cursor-pointer p-buttons border border-tertiary-purple my-4 mr-2 w-fit  bg-tertiary-purple text-fourth-green hover:bg-fourth-green hover:text-tertiary-purple"
                >
                  Visit Gallery
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
