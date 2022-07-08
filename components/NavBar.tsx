import React from "react";

export default function NavBar(props: any) {
  const { children } = props;
  const meta = {
    title: "About",
  };
  return (
    <div className="fixed bg-neutral-50 w-screen p-5 z-10 mix-blend-darken filter">
      <div className="flex flex-row w-screen justify-between max-w-7xl m-auto">
        <div>
          <a className="tracking-widest" href="/">
            Jorge Delgadillo
          </a>
        </div>
        <div>
          <a href="/aboutMe">About</a>
          <a className="px-6">Projects</a>
          <a>Contact</a>
        </div>
      </div>
    </div>
  );
}
