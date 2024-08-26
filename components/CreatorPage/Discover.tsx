import getTokenLink from "@/lib/getTokenLink";
import getValidImage from "@/lib/getValidImage";
import { trending_filter } from "@/sources/trending_filter";
import Image from "next/image";
import Link from "next/link";

const Discover = ({ className = '' }) => {
  const mints = trending_filter.slice(0, 6);

  return (
    <div className={className}>
      <h1 className="mb-8 pragmatica-text uppercase font-light text-3xl/8 md:text-5xl/10">Discover</h1>

      <div className='grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] auto-rows-[1fr] gap-5'>
        {mints.map((mint, i) => (
          <Link
            key={`discover${i}`}
            className='relative flex items-start aspect-square bg-secondary-white rounded-cards overflow-hidden'
            href={getTokenLink(mint.address as any, mint.tokenId)}>
            <Image
              className='size-full transition-opacity opacity-0 duration-[2s] object-cover'
              src={getValidImage(mint.webAssets.previewAsset.previewImage)}
              width={300}
              height={300}
              alt="Preview"
              loading="lazy"
              onLoadingComplete={(image) => image.classList.remove("opacity-0")}
            />
            <div className='absolute p-4 inset-0 flex flex-col justify-end opacity-0 cursor-pointer hover:opacity-85 transition duration-700 bg-fifth-purple'>
              <p className="pragmatica-text text-fourth-green uppercase lg:text-xl max-w-fit overflow-hidden text-ellipsis whitespace-nowrap">
                {mint.name}
              </p>
              <p className="text-xs">Artist</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
};

export default Discover;