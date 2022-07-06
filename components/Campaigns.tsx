import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Campaigns({ description, id, title, thumbnail }: any) {
  return (
    <div className="p-7 cursor-pointer">
      <Link href={`/projects/MediaProjects/${id}`} passHref scroll={false}>
        <div className=" hover:scale-[103%] transition-all ">
          <Image
            src={thumbnail}
            alt={title}
            width={400}
            height={605}
            className="rounded-xl"
          />
          <h1 className="text-lg font-medium">{title}</h1>
          <p className="font-extralight">{description}</p>
        </div>
      </Link>
    </div>
  );
}
