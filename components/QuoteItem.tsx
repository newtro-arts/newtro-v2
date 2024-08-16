import React from "react";
import Image from "next/image";

export interface QuoteItemProps {
  artistName: string;
  quote: string;
  artistPfp: string;
  bg: string;
  textColor?: string;
}

const QuoteItem = ({
  artistName,
  artistPfp,
  quote,
  bg,
  textColor,
}: QuoteItemProps) => {
  return (
    <div
      className={`h-full flex flex-col justify-between p-4 lg:p-8  ${bg} ${textColor}`}
    >
      <p className="text-sm">"{quote}"</p>
      <div className="text-xs flex items-end">
        <Image
          src={artistPfp}
          width={36}
          height={36}
          alt={artistName}
          className="mr-2 object-cover"
        />
        <div>
          <p className="font-bold">{artistName}</p>
        </div>
      </div>
    </div>
  );
};

export const QuoteGrid = ({ quotes }: { quotes: QuoteItemProps[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0  mb-4">
      {quotes.map((quote, index) => (
        <div key={index} className="w-full h-[300px] sm:h-[300px] lg:h-[350px]">
          <QuoteItem {...quote} />
        </div>
      ))}
    </div>
  );
};

export default QuoteItem;
