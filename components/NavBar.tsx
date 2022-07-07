import React from "react";

export default function NavBar(props: any) {
  const { children } = props;
  const meta = {
    title: "About",
  };
  return (
    <div className="fixed bg-amber-100 w-screen p-5">
      <div>
        <a href="/aboutMe">About</a>
      </div>
    </div>
  );
}
