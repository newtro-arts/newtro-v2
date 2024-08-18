import React, { useState, useEffect } from "react";
import { RiInstagramLine, RiTwitterLine, RiTwitterXLine } from "react-icons/ri";

interface ShareButtonsProps {
  url: string;
  title: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title }) => {
  const shareContent = () => {
    if (navigator.share) {
      navigator
        .share({
          title,
          url,
        })
        .catch((error) => console.error("Error sharing", error));
    } else {
      alert(
        "Web Share API no está disponible en tu navegador. Por favor, copia el enlace manualmente.",
      );
    }
  };

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      title,
    )}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, "_blank");
  };

  const shareOnInstagram = () => {
    if (navigator.share) {
      navigator
        .share({
          title,
          url,
          text: "Check out this blog post!",
        })
        .catch((error) => console.error("Error sharing", error));
    } else {
      navigator.clipboard.writeText(url).then(() => {
        alert(
          "Link copied to clipboard. You can now share it on Instagram Direct :)",
        );
      });
    }
  };

  return (
    <div className="flex flex-col pb-8 border-b border-b-fourth-green w-full">
      <p className="uppercase bg-fourth-green text-primary-dark w-fit p-buttons">
        Share It:
      </p>
      <div className="flex h-10 mt-8">
        <button
          onClick={shareOnInstagram}
          className="flex items-center px-8 lg:px-12 bg-primary-dark border border-fourth-green "
        >
          <RiInstagramLine />
        </button>
        <button
          onClick={shareOnTwitter}
          className="flex items-center px-8 lg:px-12 bg-primary-dark border border-fourth-green "
        >
          <RiTwitterXLine />
        </button>
      </div>
    </div>
  );
};

export default ShareButtons;
