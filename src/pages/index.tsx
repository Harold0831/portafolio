import Image from "next/image";
import Header from "@/components/ui/Header";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Jobs from "@/components/home/Jobs";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black via-slate-950 to-purple-950 text-white min-h-screen">
      <Header/>
      <Hero/>
      <About/>
      <Jobs/>
      <Contact/>
    </div>
  );
}
