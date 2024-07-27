import nextwave from "@/nextwave";
import React from "react";
import TokenPage from "@/components/TokenPage";
import { useRouter } from "next/router";

const BridgeCollection = () => {
  const router = useRouter();
  const { name } = router.query;
  const selectedDrop = nextwave.find((a) => a.name === name);

  return <TokenPage selectedDrop={selectedDrop} />;
};

export default BridgeCollection;
