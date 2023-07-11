import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-black">
      <div className="text-white font-bold text-4xl">Hi 👋</div>
    </main>
  );
}
