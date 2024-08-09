import fetchCollaborativeCollection from "@/lib/fetchCollection";
import fetchTokensWithMetadata from "@/lib/fetchCollectionWithMetadata";
import getFormattedNewtroToken from "@/lib/getFormattedNewtroToken";
import getLegacyCollectionPageInfo from "@/lib/getLegacyCollectionPageInfo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Address } from "viem";

const useCollectionPage = () => {
  const { query } = useRouter();
  const { contractAddress } = query;
  console.log("SWEETS contractAddress", contractAddress);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tokens, setTokens] = useState<any[]>([]);
  const isCollaborative = contractAddress?.includes("0x");

  useEffect(() => {
    const init = async () => {
      const response = await fetchTokensWithMetadata(
        (contractAddress as string).split(":")[1] as Address
      );
      if (!response) return;
      console.log("SWEETS response", response);
      setName(response.contract.name);
      setDescription(response.contract.description);
      const formattedTokens = response.tokens.map((token) =>
        getFormattedNewtroToken(response.contract, token.metadata, token.token)
      );
      console.log("SWEETS formattedTokens", formattedTokens);
      setTokens(formattedTokens);
      console.log("SWEETS response", response);
    };

    if (!contractAddress) return;
    if (isCollaborative) {
      init();
      return;
    }
    const {
      name: legacyName,
      description: legacyDescription,
      tokens: legacyTokens,
    } = getLegacyCollectionPageInfo(contractAddress as string);
    setName(legacyName);
    setDescription(legacyDescription);
    setTokens(legacyTokens);
  }, [contractAddress, isCollaborative]);

  return { name, description, tokens };
};

export default useCollectionPage;
