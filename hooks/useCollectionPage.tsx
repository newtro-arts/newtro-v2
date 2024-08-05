import getLegacyCollectionPageInfo from "@/lib/getLegacyCollectionPageInfo";
import { useRouter } from "next/router";

const useCollectionPage = () => {
  const { query } = useRouter();
  const { contractAddress } = query;
  const { name, description, tokens } = getLegacyCollectionPageInfo(
    contractAddress as string
  );
  return { name, description, tokens };
};

export default useCollectionPage;
