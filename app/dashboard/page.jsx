"use client";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const back = () => {
    router.push("/");
  };
  return (
    <>
      <div>dashboard</div>
      <button onClick={back} className="bg-blue-600 py-2 px-3 text-white text-xl rounded-lg" >Back</button>
    </>
  );
};

export default page;
