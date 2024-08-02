import React from "react";
import TokenPage from "@/components/TokenPage";
import { useRouter } from "next/router";
import { drop2HashedThreads } from "@/drop2-hashed-threads";

const HashedThreadsCollection = () => {
  const router = useRouter();
  const { name } = router.query;
  const selectedDrop = drop2HashedThreads.find((a) => a.name === name);
  return <TokenPage selectedDrop={selectedDrop} />;
};

export default HashedThreadsCollection;
