import Head from "next/head";
import React from "react";

export default function Container(props: any) {
  const { children } = props;
  const meta = {
    title: "Jorge Dev",
  };
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="relative flex flex-col min-h-screen w-screen m-auto justify-center items-center bg-slate-50">
        {children}
      </div>
    </>
  );
}
