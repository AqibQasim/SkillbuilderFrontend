import React from "react";
import Congrats from "@/components/Congrats";
import { useRouter } from "next/router";
const Congralutions = () => {
  const router = useRouter();
  const { source } = router.query;

  return <Congrats source={source} />;
};
export default Congralutions;
