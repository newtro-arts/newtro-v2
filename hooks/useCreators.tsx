import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

const useCreators = () => {
  const { address } = useAccount();
  const [creators, setCreators] = useState([]);
  const [isWhitelisted, setIsWhitelisted] = useState<boolean>(false);

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const response = await fetch("/api/creators");
        if (!response.ok) {
          throw new Error("Failed to fetch creators");
        }
        const data = await response.json();
        setCreators(data?.data || []);
        const isAddressWhitelisted = data.data.some(
          (creator: any) =>
            creator.address.toLowerCase() === address?.toLowerCase()
        );
        setIsWhitelisted(isAddressWhitelisted);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCreators();
  }, []);

  return { creators, isWhitelisted };
};

export default useCreators;
