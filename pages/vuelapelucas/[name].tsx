import React from "react";
import TokenPage from "@/components/TokenPage";
import { useRouter } from "next/router";
import vuelapelucas from "@/vuelapelucas";

const Vuelapelucas = () => {
  const router = useRouter();
  const { name } = router.query;
  const selectedDrop = vuelapelucas.find((a) => a.name === name);

  return <TokenPage selectedDrop={selectedDrop} />;
};

export default Vuelapelucas;
