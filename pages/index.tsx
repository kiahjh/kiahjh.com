import Image from 'next/image';
import ProfilePicture from '../public/me.jpg';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 py-20 px-8 xs:px-12">
      <Image
        src={ProfilePicture}
        alt={'picture of kiahjh'}
        className="w-32 h-32 rounded-full"
      />
      <h2 className="text-gray-400 font-light text-lg mt-8 mb-1">Hey there!</h2>
      <h1 className="text-4xl text-gray-200 font-extralight">
        I'm{' '}
        <Link href="https://github.com/kiahjh" className="font-bold text-white">
          @kiahjh
        </Link>
      </h1>
      <h3 className="text-slate-400 text-lg font-light mt-16 text-center">
        Here's what I'm currently spending most of my time on:
      </h3>
      <div className="mt-4 flex justify-center gap-8 flex-wrap">
        <Project
          title={'Gertrude'}
          description={`The best macOS internet safety and website blocker on the market.`}
          githubUrl={'https://github.com/gertrude-app'}
          url={'https://gertrude.app'}
        />
        <Project
          title={'Friends Library'}
          description={`Dedicated to the preservation and free distribution of early Quaker writings.`}
          githubUrl={'https://github.com/friends-library'}
          url={'https://friendslibrary.com'}
        />
        <Project
          title={'The Ancient Path'}
          description={`Writings and teachings of Jason R. Henderson.`}
          githubUrl={'https://github.com/kiahjh/ancient-path'}
          url={'https://hender.blog'}
        />
      </div>
    </main>
  );
}

interface ProjectProps {
  title: string;
  description: string;
  githubUrl: string;
  url: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, githubUrl, url }) => {
  return (
    <div className="border border-slate-800 bg-slate-800/50 rounded-xl shadow-lg shadow-black/30 flex flex-col">
      <div className="p-6 flex-grow">
        <h4 className="text-xl text-rose-500 font-medium tracking-wider">{title}</h4>
        <p className="max-w-xs text-slate-500 font-light mt-2">{description}</p>
      </div>
      <div className="p-2 flex justify-end items-center gap-2">
        <Link
          href={githubUrl}
          target="_blank"
          className="w-10 h-10 hover:text-slate-400 text-slate-500 hover:bg-slate-800 rounded-lg flex justify-center items-center transition duration-100 cursor-pointer"
        >
          <i className="fa-brands fa-github text-2xl" />
        </Link>
        <Link
          href={url}
          target="_blank"
          className="w-10 h-10 hover:text-slate-400 text-slate-500 hover:bg-slate-800 rounded-lg flex justify-center items-center transition duration-100 cursor-pointer"
        >
          <i className="fa-solid fa-up-right-from-square" />
        </Link>
      </div>
    </div>
  );
};
