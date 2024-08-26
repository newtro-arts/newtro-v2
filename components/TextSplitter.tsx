import React from "react";

export default function TextDisplay({ description }: any) {
  const paragraphs = description?.split("\n");

  return (
    <div>
      {paragraphs?.map((x: any, index: any) => (
        <p
          key={index}
          className="mb-2 text-sm tracking-wide leading-5 overflow-wrap break-words whitespace-normal"
        >
          {x}
        </p>
      ))}
    </div>
  );
}
