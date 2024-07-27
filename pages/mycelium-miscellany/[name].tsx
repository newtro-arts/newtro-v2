import React from "react";
import TokenPage from "@/components/TokenPage";
import { drop1MyceliumMiscellany } from "@/mycelium-miscellany";
import { useRouter } from "next/router";

const MyceliumMiscellany = () => {
  const router = useRouter();
  const { name } = router.query;
  const selectedDrop = drop1MyceliumMiscellany.find((a) => a.name === name);

  return <TokenPage selectedDrop={selectedDrop} />;
};

export default MyceliumMiscellany;
