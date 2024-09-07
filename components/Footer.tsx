import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";
import { FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import logo from "../public/Logo_NegroVerde.svg";

interface FooterLinkProps {
  href: string;
  label: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, label }) => {
  const renderIcon = () => {
    switch (label.toLowerCase()) {
      case "x":
        return <FaXTwitter className="block lg:hidden" size={22} />;
      case "instagram":
        return <FaInstagram className="block lg:hidden" size={22} />;
      case "youtube":
        return <FaYoutube className="block lg:hidden" size={22} />;
      case "warpcast":
        return (
          <Image
            src="/warpcast.svg"
            width={22}
            height={22}
            alt="Warpcast"
            className=" block lg:hidden object-cover"
          />
        );
      default:
        return null;
    }
  };

  return (
    <Link href={href} target="_blank">
      <div className="flex items-center lg:items-end px-8 h-full">
        <GoLinkExternal size={18} className="hidden lg:block" />
        <p className="ml-2 hidden lg:block">{label}</p>
        {renderIcon()}
      </div>
    </Link>
  );
};

export default function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row justify-between lg:pl-5 py-4 lg:py-1 lg:pt-8 max-w-full bg-primary-dark text-fourth-green border-y border-fourth-green lg:border-none">
      <Link href="/" aria-label="Home" className="hidden lg:flex">
        <Image alt="Newtro Logo" width={49} height={49} src={logo} />
      </Link>
      <div className="flex lg:items-center justify-between lg:justify-end w-full pb-4">
        <FooterLink href="https://x.com/NewtroArts" label="X" />
        <FooterLink
          href="https://www.instagram.com/newtroarts/"
          label="Instagram"
        />
        <FooterLink
          href="https://www.youtube.com/channel/UCnr-Jd3qkb0N_e0Dvzhig7Q"
          label="Youtube"
        />
        <FooterLink href="https://warpcast.com/newtroarts" label="Warpcast" />
      </div>
      <p className="pragmatica-text uppercase pt-4 text-xs block lg:hidden text-center border-t border-fourth-green">
        Newtro Arts 2024
      </p>
    </footer>
  );
}
