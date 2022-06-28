import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { AboutMe } from "./aboutMe";
import Landing from "./landing";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col  min-h-screen w-screen m-auto justify-center items-center bg-amber-50">
      <Landing />
      <AboutMe />
    </div>
  );
};

export default Home;
