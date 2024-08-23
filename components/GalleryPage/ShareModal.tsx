import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface ShareLinkProps {
  href: string;
  label: string;
  image: string;
}

const ShareLinks: React.FC<ShareLinkProps> = ({ href, label, image }) => {
  return (
    <Link href={href} target="_blank">
      <div className="flex items-center lg:items-end h-full">
      <Image src={image} width={55} height={55} alt={label} className='border border-fourth-green rounded-tl-[15px] rounded-br-[15px]'/>
      </div>
    </Link>
  );
};


const LINK_SHARE = "https://www.newtro.xyz/collect"
const ShareModal = () => {
  return (
    <div className="w-fit p-4 self-center h-fit flex flex-col gap-y-2 text-fourth-green border border-fourth-green rounded-tl-[15px] rounded-br-[15px]">
      <p className="pragmatica-text uppercase text-xl">Share</p> 
      <div className="flex gap-x-4">
        <ShareLinks href='' image='/x.png' label='X'/>
        <ShareLinks href='' image='/farcaster.png' label='Farcaster'/>
        <ShareLinks href='' image='/telegram.png' label='Telegram'/>
        <ShareLinks href='' image='/social-1.png' label='Social'/>
      </div>
      <div className='flex justify-between gap-x-2'>
        <input value={LINK_SHARE} className='border focus:outline-none rounded-tl-[15px] rounded-br-[15px] bg-transparent px-2 border-fourth-green w-full'/>
        <button onClick={() => {navigator.clipboard.writeText(LINK_SHARE)}} className='bg-fourth-green border border-fourth-green text-primary-dark p-2 hover:bg-primary-dark hover:text-fourth-green'>Copy</button>
      </div>
      <div className="flex items-center text-xs">
        <Image src="/Logo_VerdeTransparente.svg" alt='Newtro Arts' width={55} height={55}/>
        <p>Newtro's Collective Treasure earns when someone mints from your link.<br></br> <span className="underline">Learn more</span> about how to share and support.</p>
      </div>
    </div>
  )
}

export default ShareModal