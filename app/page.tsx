import React from "react";
import Image from "next/image";
import Link from "next/link";
import Noise from "../public/noise.svg";
import ProfilePicture from "../public/me.jpg";

export default function Home() {
  const stars: Array<{ size: number; left: number; top: number }> = [];
  for (let i = 0; i < 150; i++) {
    const top = Math.random() * 1000;
    stars.push({
      size: Math.floor(Math.random() * 3) + 1.5 - top / 300,
      left: Math.random() * 100,
      top: top,
    });
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-500 via-blue-500 to-white py-36 px-8 xs:px-12 relative flex flex-col">
      <div
        className="absolute w-full h-full bottom-0 left-0 bg-cover bg-center [filter:contrast(170%)_brightness(1000%)]"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0,3,255,0.62), rgba(0,0,0,0)), url(${Noise.src})`,
        }}
      />
      <div className="w-full h-full left-0 top-0 absolute">
        {stars.map((star) => (
          <Star key={star.top} {...star} />
        ))}
      </div>
      <div className="absolute backdrop-blur-[1px] w-full h-full left-0 top-0" />
      <div className="flex flex-col justify-center items-center flex-grow relative">
        <Image
          src={ProfilePicture}
          alt={"picture of kiahjh"}
          className="w-32 h-32 rounded-full object-cover object-center"
        />
        <h2 className="text-black font-light text-lg mt-8 mb-1">Hey there!</h2>
        <h1 className="text-4xl text-black font-extralight">
          I&apos;m{" "}
          <Link
            href="https://github.com/kiahjh"
            className="font-bold text-black"
          >
            @kiahjh
          </Link>
        </h1>
        <h3 className="text-black text-lg font-light mt-16 text-center">
          Here&apos;s what I&apos;m currently spending most of my time on:
        </h3>
        <div className="mt-4 flex justify-center gap-8 flex-wrap">
          <Project
            title={"Gertrude"}
            description={`The best macOS internet safety and website blocker on the market.`}
            githubUrl={"https://github.com/gertrude-app"}
            url={"https://gertrude.app"}
          />
          <Project
            title={"Friends Library"}
            description={`Dedicated to the preservation and free distribution of early Quaker writings.`}
            githubUrl={"https://github.com/friends-library"}
            url={"https://friendslibrary.com"}
          />
          <Project
            title={"The Ancient Path"}
            description={`Writings and teachings of Jason R. Henderson.`}
            githubUrl={"https://github.com/kiahjh/ancient-path"}
            url={"https://hender.blog"}
          />
        </div>
        <h3 className="text-black text-lg font-light mt-16 text-center">
          Some other things I&apos;ve built:
        </h3>
        <div className="mt-4 flex justify-center gap-8 flex-wrap">
          <Project
            title={"next-bg-image"}
            description={`Responsive, optimized, and accessible background images for Next.js. Made with @jaredh159.`}
            githubUrl={"https://github.com/kiahjh/next-bg-image"}
            url={"https://next-bg-image.kiahjh.com"}
          />
          <Project
            title={"Canoe Creation Website"}
            description={`A website for a local Christian canoeing/outdoor ministry.`}
            githubUrl={"https://github.com/kiahjh/canoe-creation"}
            url={"https://canoecreation.org"}
          />
          <Project
            title={"Virtuoso Landscaping Website"}
            description={`A website for a local landscaping company.`}
            githubUrl={"https://github.com/kiahjh/virtuoso"}
            url={"https://virtuosolandscapes.com"}
          />
        </div>
      </div>
    </main>
  );
}

interface StarProps {
  left: number;
  size: number;
  top: number;
}

const Star: React.FC<StarProps> = ({ left, size, top }) => {
  return (
    <div
      style={{
        height: `${size}px`,
        width: `${size}px`,
        top: `${top}px`,
        left: `${left}%`,
      }}
      className="rounded-full bg-white absolute flex justify-center items-center"
    >
      {size > 3 && (
        <>
          <div
            className="w-[0.75px] bg-white/50 absolute rounded-[100%]"
            style={{ height: `${size * 4.5}px` }}
          />
          <div
            className="h-[0.75px] bg-white/50 absolute rounded-[100%]"
            style={{ width: `${size * 4.5}px` }}
          />
        </>
      )}
    </div>
  );
};

interface ProjectProps {
  title: string;
  description: string;
  githubUrl: string;
  url: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  githubUrl,
  url,
}) => {
  return (
    <div className="border border-slate-100 bg-white/80 backdrop-blur-xl rounded-xl shadow-lg shadow-slate-300/30 flex flex-col">
      <div className="p-6 flex-grow">
        <h4 className="text-xl font-semibold tracking-wider w-fit bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          {title}
        </h4>
        <p className="max-w-xs text-slate-600 font-light mt-2">{description}</p>
      </div>
      <div className="p-2 flex justify-end items-center gap-2">
        <Link
          href={githubUrl}
          target="_blank"
          className="w-10 h-10 hover:text-slate-600 text-slate-400 hover:bg-black/5 rounded-lg flex justify-center items-center transition duration-200 cursor-pointer active:scale-95 active:bg-black/10 active:rounded-xl"
        >
          <i className="fa-brands fa-github text-2xl" />
        </Link>
        <Link
          href={url}
          target="_blank"
          className="w-10 h-10 hover:text-slate-600 text-slate-400 hover:bg-black/5 rounded-lg flex justify-center items-center transition duration-200 cursor-pointer active:scale-95 active:bg-black/10 active:rounded-xl"
        >
          <i className="fa-solid fa-up-right-from-square" />
        </Link>
      </div>
    </div>
  );
};
