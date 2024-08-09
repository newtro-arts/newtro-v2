import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

interface AccordionItem {
  title: string;
  content: string;
}

const AboutAccordion: React.FC<AccordionItem> = ({ title, content }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="min-w-full">
      <div className={`border-b border-fourth-green mx-8 ${accordionOpen ? "pb-8" : "pb-2"}`}>
        <div className="flex text-center lg:text-left items-center justify-center lg:justify-start py-6 cursor-pointer" onClick={() => setAccordionOpen(!accordionOpen)}>
          <div className="text-lg xl:text-4xl uppercase pragmatica-text mr-2">{title}</div>
          <div className="text-gray-500 lg:mx-8 mt-2">
            {accordionOpen ? <IoIosArrowUp color="#D1F121" /> : <IoIosArrowDown color="#D1F121" />}
          </div>
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${accordionOpen ? "max-h-[400px]" : "max-h-0"}`}
          style={{ transition: "max-height 0.5s ease" }}
        >
          <p className="text-lg py-1">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutAccordion;
