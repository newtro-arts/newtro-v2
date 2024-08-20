import Image from "next/image";
import React from "react";
import { Drop } from "../FeaturedMintsHome";
import useGetContractInfo from "../gql/getContractInfo";
import MintInformation from "./MintInformation";

const MintTemplate = ({ id, name, image, contract, token_id }: Drop) => {
  const { data } = useGetContractInfo({
    collectionAddress: contract,
    tokenId: parseInt(token_id),
  });
  const totalSupply: string =
    data?.zoraCreateTokens[0]?.totalSupply.toString() + " Minted" ??
    "No mints yet";
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 my-4 mx-8">
      <Image
        src={`https://storage.newtro.xyz/${image}`}
        alt={name}
        width={600}
        height={500}
        className="border border-fourth-green rounded-tl-[15px] rounded-br-[15px]"
      />
      <MintInformation mints={totalSupply} title={name}/>
    </div>
  );
};

export default MintTemplate;
