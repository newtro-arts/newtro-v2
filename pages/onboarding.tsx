import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OnboardingZora = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen max-w-full bg-primary-dark text-fourth-green pt-20">
      <Head>
        <title>About</title>
      </Head>
      <Header />
      <main className="flex flex-col mt-2 w-full px-8 gap-4">
        <h1 className="pragmatica-text text-base lg:text-[25px] uppercase">
          How to collect on Zora
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <Image
            src="/zora-thumbnail.svg"
            width={555}
            height={500}
            className="self-start mb-4"
            alt="Zora Onboarding"
          />
          <div className="flex flex-col justify-center gap-4">
            <p>
              First Time on Zora? Use our invite link to sign up on Zora and
              support our collective of artists right from the start!
            </p>
            <Link
              href="https://zora.co/invite/newtroarts.eth"
              target="_blank"
              className="p-buttons bg-fifth-purple text-fourth-green w-fit self-center"
            >
              Invite to Zora
            </Link>
            <p>
              Complete your profile to get ready and you'll be able to mint and
              comment on each NFT artwork posted by the artists in the official
              collection created by Newtro.
            </p>
            <p>
              Each digital edition of the artwork costs 777 sparks (about $2)
              This can be paid in app with crypto or credit card.
            </p>
            <p>
              You can add ETH to your Zora L2 wallet by: - Purchasing ✧ sparks ✧
              (a term for a fraction of ETH) with a credit card on the new Zora
              App for IOS.
            </p>
            <Link
              href="https://apps.apple.com/us/app/zora-imagine/id6474192103"
              target="_blank"
              className="p-buttons bg-fifth-purple text-fourth-green w-fit self-center"
            >
              Download Zora App
            </Link>
            <p>
              - Transferring funds from other L2 chains with the bridge function
              in your Rainbow wallet.
            </p>
            <Link
              href="https://rainbow.me/download"
              target="_blank"
              className="p-buttons bg-fifth-purple text-fourth-green w-fit self-center"
            >
              Download Rainbow Wallet
            </Link>
            <p className="font-semibold">You can WIN the PHYSICAL ARTWORK!</p>
            <p>
              Leave a comment with your social media @handle on each NFT. By
              doing this, you'll enter a draw to win the physical piece
              exhibited at "Aleph", Pop-Up City, Buenos Aires, Argentina.
            </p>
            <p>
              Stay tuned and follow @newtroarts on social media. Engage with our
              artists' community and support the w3b culture!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OnboardingZora;
