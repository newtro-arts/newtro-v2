import React from "react";
import Image from "next/image";
import getIpfsLink from "@/lib/ipfs/getIpfsLink";

interface WebAsset {
  mime?: string;
  originalAsset: string;
  previewAsset: string;
}

const DropContent: React.FC<WebAsset> = ({
  mime,
  originalAsset,
  previewAsset,
}) => {
  const isVideo = mime === "video/mp4";
  const isPhoto = mime?.includes("image");
  const isOther =
    mime === "application/pdf" ||
    mime === "text/html" ||
    mime === "audio/wav" ||
    mime === "model/gltf" ||
    mime === "model/gltf-binary" ||
    mime === "";
  const isIframe = mime === "application/zip";
  const isDefaultContent = !isVideo && !isIframe;
  return (
    <div className="w-full">
      {isVideo && (
        <div className="w-full object-contain">
          <video autoPlay muted loop  className=" rounded-tl-[15px] rounded-br-[15px]">
            <source type={mime} src={getIpfsLink(originalAsset)} />
          </video>
        </div>
      )}
      {isIframe && (
        <iframe src={getIpfsLink(originalAsset)} className="w-full h-full rounded-tl-[15px] rounded-br-[15px]" />
      )}
      {isDefaultContent && (
        <Image
          src={getIpfsLink(isPhoto ? originalAsset : previewAsset)}
          alt=""
          width={isOther ? 400 : 200}
          height={isOther ? 400 : 200}
          className={`w-full ${
            isPhoto && "h-[100%]"
          } object-contain h-[50%] aspect-square rounded-tl-[15px] rounded-br-[15px]`}
        />
      )}
    </div>
  );
};

export default DropContent;
