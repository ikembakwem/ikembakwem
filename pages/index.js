import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link.js';
import NavigationBar from '../components/NavigationBar';
import HeroVariant from '../components/HeroVariant';

export default function Home() {
  return (
    <div className="flex flex-col max-h-screen w-full max-w-full h-full bg-transparent box-border">
      <div>
        <div className="relative h-16"></div>
        <NavigationBar />
        <HeroVariant />
        <HeroVariant />
        <HeroVariant />
      </div>
    </div>
  );
}
