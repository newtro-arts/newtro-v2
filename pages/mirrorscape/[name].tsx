import React from "react";
import TokenPage from "@/components/TokenPage";
import { drop3Mirrorscape } from "@/drop3-mirrorscape";
import { useRouter } from "next/router";

const Mirrorscape = () => {
  const router = useRouter();
  const { name } = router.query;
  const selectedDrop = drop3Mirrorscape.find((a) => a.name === name);

  return <TokenPage selectedDrop={selectedDrop} />;
};

export default Mirrorscape;
