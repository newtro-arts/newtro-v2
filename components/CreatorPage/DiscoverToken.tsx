import getTokenLink from "@/lib/getTokenLink";
import getValidImage from "@/lib/getValidImage";
import getTokenMetdata from "@/lib/ipfs/getTokenMetadata";
import { Token } from "@/types/token";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

export default function DiscoverToken({ token }: { token: Token }) {
  const { data, isSuccess } = useQuery({
    queryKey: [`${token.contract.address}/${token.tokenId}`],
    queryFn: () => getTokenMetdata(token.tokenURI),
  });

  return (
    <Link
      className='relative flex items-start aspect-square bg-secondary-white rounded-cards overflow-hidden'
      href={getTokenLink(token.contract.address, token.tokenId)}>
      <Image
        className='size-full transition-opacity opacity-0 duration-[2s] object-cover'
        src={getValidImage(isSuccess ? data.image : "")}
        width={300}
        height={300}
        alt="Preview"
        loading="lazy"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
      <div className='absolute p-4 inset-0 flex flex-col justify-end opacity-0 cursor-pointer hover:opacity-85 transition duration-700 bg-fifth-purple'>
        <p className="pragmatica-text text-fourth-green uppercase lg:text-xl max-w-fit overflow-hidden text-ellipsis whitespace-nowrap">
          {isSuccess ? data?.name : ""}
        </p>
        <p className="text-xs">Artist</p>
      </div>
    </Link>
  );
}
