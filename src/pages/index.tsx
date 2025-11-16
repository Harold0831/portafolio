import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/ui/Header";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Jobs from "@/components/home/Jobs";
import Contact from "@/components/home/Contact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Jobs/>
      <Contact/>
    </div>
  );
}
