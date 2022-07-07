import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Campaigns({ description, id, title, thumbnail }: any) {
  return (
    <div className="p-5">
      <Link href={`/projects/MediaProjects/${id}`} passHref scroll={false}>
        <div className=" hover:scale-[103%] transition-all cursor-pointer hover:shadow-xl rounded-xl p-2 hover:ring-1 ring-indigo-200 hover:bg-zinc-50">
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
