import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface ShareLinkProps {
  href: string;
  label: string;
  image: string;
}

const ShareLinks: React.FC<ShareLinkProps> = ({ href, label, image }) => {
  return (
    <Link href={href} target="_blank">
      <div className="flex items-center lg:items-end h-full">
        <Image
          src={image}
          width={55}
          height={55}
          alt={label}
          className="aspect-square border border-fourth-green rounded-tl-[15px] rounded-br-[15px]"
        />
      </div>
    </Link>
  );
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

const ShareModal = ({
  onClose,
  link,
}: {
  onClose: () => void;
  link: string;
}) => {
  const shareLink = `https://newtro.xyz/collect/zora:${link}`;
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50 px-8 lg:px-0"
      onClick={handleClickOutside}
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.1 }}
        className="w-full lg:w-fit p-4 self-center h-fit flex flex-col bg-primary-dark gap-y-4 text-fourth-green border border-fourth-green rounded-tl-[15px] rounded-br-[15px]"
      >
        <p className="pragmatica-text uppercase text-xl">Share</p>
        <div className="flex gap-x-4">
          <ShareLinks
            href="https://warpcast.com/~/compose?embeds[]=https://newtro-frame-collection.vercel.app/api"
            image="/farcaster.png"
            label="Farcaster"
          />
        </div>
        <div className="flex justify-between gap-x-2">
          <input
            value={shareLink}
            className="border focus:outline-none rounded-tl-[15px] rounded-br-[15px] bg-transparent px-2 border-fourth-green w-full"
          />
          <button
            onClick={() => {
              navigator.clipboard.writeText(shareLink);
            }}
            className="bg-fourth-green border border-fourth-green text-primary-dark p-2 hover:bg-primary-dark hover:text-fourth-green"
          >
            Copy
          </button>
        </div>
        <div className="flex items-center text-xs">
          <Image
            src="/Logo_VerdeTransparente.svg"
            alt="Newtro Arts"
            width={55}
            height={55}
          />
          <p className="overflow-wrap break-words whitespace-normal">
            Newtro's Collective Treasure earns when someone mints from your
            link.<br></br> <span className="underline">Learn more</span> about
            how to share and support.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ShareModal;
