import React, { useState, useEffect } from "react";
import CustomButton from "./Commons/CustomButton";
import ConnectButtonMobile from "./Commons/ConnectButtonMobile";
import logo from "../public/logo-nav-black.svg";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { TbMenu } from "react-icons/tb";
import useCreators from "@/hooks/useCreators";
import DropdownButton from "./DropdownButton";

export default function Header() {
  const {isWhitelisted, creators } = useCreators();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed left-0 top-0 w-full z-20 ease-in duration-300">
      <div className="fixed flex justify-between w-full h-fit items-center pl-6 pr-8 text-black bg-fourth-green z-10">
        <div className="logo text-2xl font-bold z-10 pt-1">
          <Link href="/">
            <Image src={logo} width={132} height={40} alt="Newtro" />
          </Link>
        </div>
        <div className="hidden md:flex flex-row items-center">
          {isWhitelisted &&  
          <DropdownButton/>
          }
          <Link
            className="h-fit mr-10 hover-underline-animation-nav"
            href="/gallery"
          >
            Gallery
          </Link>
          <Link
            className="h-fit mr-10 hover-underline-animation-nav"
            href="/about"
          >
            About
          </Link>
          <Link
            className="h-fit mr-10 hover-underline-animation-nav"
            href="/log/articles/bosque-gracias"
          >
            Log
          </Link>
          <Link
            className="h-fit mr-10 hover-underline-animation-nav"
            href="/archive"
          >
            Archive
          </Link>
          <CustomButton />
        </div>

        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose style={{ color: "#000000" }} size={30} />
          ) : (
            <TbMenu style={{ color: "#000000" }} size={30} />
          )}
        </div>
      </div>

      <div
        className={
          nav
            ? "sm:hidden fixed top-4 left-0 right-0 bottom-0 flex items-center w-full h-screen bg-primary-dark ease-in duration-300"
            : "sm:hidden fixed top-0 left-[-100%] right-0 bottom-0 flex items-center w-full h-screen bg-primary-dark ease-in duration-300"
        }
      >
        <ul className="w-full px-8">
        {isWhitelisted &&  

          <li className="text-fourth-green p-4 pl-0 text-2xl hover:text-gray-500 border-y border-y-fourth-green">
          <DropdownButton/>
          </li>
                    }


          <li className="text-fourth-green p-4 pl-0 text-2xl hover:text-gray-500 border-y border-y-fourth-green">
            <Link onClick={handleNav} href="/about">
              About
            </Link>
          </li>
          <li className="text-fourth-green p-4 pl-0 text-2xl hover:text-gray-500 border-b border-b-fourth-green">
            <Link onClick={handleNav} href="/log">
              Log
            </Link>
          </li>
          <li className="text-fourth-green p-4 pl-0 text-2xl hover:text-gray-500 border-b border-b-fourth-green">
            <Link onClick={handleNav} href="/archive">
              Archive
            </Link>
          </li>
          <li className="text-fourth-green p-4 pl-0 text-2xl hover:text-gray-500 border-b border-b-fourth-green">
            <Link onClick={handleNav} href="https://warpcast.com/newtroarts">
              Warpcast
            </Link>
          </li>
          <li className="text-fourth-green p-4 pl-0 text-2xl hover:text-gray-500 border-b border-b-fourth-green">
            <Link
              onClick={handleNav}
              href="https://www.instagram.com/newtroarts/"
            >
              Instagram
            </Link>
          </li>
          <li className="text-fourth-green p-4 pl-0 text-2xl hover:text-gray-500 border-b border-b-fourth-green">
            <Link
              onClick={handleNav}
              href="https://www.youtube.com/channel/UCnr-Jd3qkb0N_e0Dvzhig7Q"
            >
              Youtube
            </Link>
          </li>
          <li className="text-fourth-green p-4 pl-0 text-2xl hover:text-gray-500 border-b border-b-fourth-green">
            <Link onClick={handleNav} href="https://x.com/NewtroArts">
              X
            </Link>
          </li>
          <li className="py-2">
            <ConnectButtonMobile />
          </li>
        </ul>
      </div>
    </div>
  );
}
