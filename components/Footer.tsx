import React from "react";
import logo from "../public/Logo_NegroVerde.svg";
import Image from "next/image";
import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";

export default function Footer() {
  return (
    <footer className="flex flex-row justify-between pl-5 pr-8 py-1 w-full bottom-0 items-center bg-primary-dark text-fourth-green ">
      <Link href="/">
        <Image alt="Newtro Logo" width={49} height={49} src={logo} />
      </Link>
      <div className='hidden lg:flex flex-col lg:flex-row items-center justify-end gap-8'>
        <Link href="https://x.com/NewtroArts" target='_blank' className='flex items-center'>
          <GoLinkExternal size={18}/>
          <p className='ml-2'>X</p>
        </Link>
        <Link href="https://www.instagram.com/newtroarts/" target='_blank' className='flex items-center'>
          <GoLinkExternal size={18}/>
          <p className='ml-2'>Instagram</p>
        </Link>
        <Link href="https://www.youtube.com/channel/UCnr-Jd3qkb0N_e0Dvzhig7Q" target='_blank' className='flex items-center'>
          <GoLinkExternal size={18}/>
          <p className='ml-2'>Youtube</p>
        </Link>
        <Link href="https://warpcast.com/newtroarts" target='_blank' className='flex items-center '>
          <GoLinkExternal size={18}/>
          <p className='ml-2'>Warpcast</p>
        </Link>
      </div>
    </footer>
  );
}
