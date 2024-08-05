import getSelectedDrop from "@/lib/getSelectedDrop";
import { useEffect, useState } from "react";
import { Address } from "viem";

const useToken = (address: Address, tokenId: number) => {
  const [selectedDrop, setSelectedDrop] = useState<any>();

  useEffect(() => {
    const init = async () => {
      const newSelectedDrop = await getSelectedDrop(
        address as Address,
        tokenId
      );
      setSelectedDrop(newSelectedDrop);
    };
    if (!(address && tokenId)) return;
    init();
  }, [address, tokenId]);

  return { selectedDrop };
};

export default useToken;
