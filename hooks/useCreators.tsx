import fetchCreators from "@/lib/fetchCreators";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

const useCreators = () => {
  const { address } = useAccount();
  const [creators, setCreators] = useState([]);
  const [isWhitelisted, setIsWhitelisted] = useState<boolean>(false);

  useEffect(() => {
    const init = async () => {
      try {
        const response = await fetchCreators();
        setCreators(response || []);
        const isAddressWhitelisted = response.some(
          (creator: any) =>
            creator.address.toLowerCase() === address?.toLowerCase()
        );
        setIsWhitelisted(isAddressWhitelisted);
      } catch (err) {
        console.error(err);
      }
    };
    init();
  }, [address]);

  return { creators, isWhitelisted };
};

export default useCreators;
