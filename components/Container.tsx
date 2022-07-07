import Head from "next/head";
import React from "react";

export default function Container(props: any) {
  const { children, ...customMeta } = props;
  const meta = {
    title: "ALDEM",
  };
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="flex flex-col min-h-screen w-screen m-auto justify-center items-center bg-slate-50">
        {children}
      </div>
    </>
  );
}
