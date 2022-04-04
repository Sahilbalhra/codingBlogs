import { useRouter } from "next/router";
import React from "react";

const slug = () => {
  const router = useRouter();
  console.log(router.query);
  const { slug } = router.query;
  return <div>{slug}</div>;
};

export default slug;
