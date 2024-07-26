import React from "react";
import logo from "../public/logo-bottom.svg";
import Image from "next/image";
import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";

export default function Footer() {
  return (
    <footer className="flex flex-row justify-between pl-5 pr-8 py-4 w-full bottom-0 items-center border-t bg-primary-dark text-fourth-green border-t-fourth-green">
      <Link href="/">
        <Image alt="Newtro Logo" width={140} height={53} src={logo} />
      </Link>
      <div className='hidden lg:flex flex-col items-end justify-end'>
        <Link href="https://x.com/NewtroArts" target='_blank' className='flex items-center mb-1'>
          <GoLinkExternal size={18}/>
          <p className='ml-1 text-lg'>X</p>
        </Link>
        <Link href="https://www.instagram.com/newtroarts/" target='_blank' className='flex items-center mb-1'>
          <GoLinkExternal size={18}/>
          <p className='ml-1 text-lg'>INSTAGRAM</p>
        </Link>
        <Link href="https://www.youtube.com/channel/UCnr-Jd3qkb0N_e0Dvzhig7Q" target='_blank' className='flex items-center mb-1'>
          <GoLinkExternal size={18}/>
          <p className='ml-1 text-lg'>YOUTUBE</p>
        </Link>
        <Link href="https://warpcast.com/newtroarts" target='_blank' className='flex items-center'>
          <GoLinkExternal size={18}/>
          <p className='ml-1 text-lg'>WARPCAST</p>
        </Link>
      </div>
    </footer>
  );
}
