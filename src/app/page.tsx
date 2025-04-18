import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Media } from "@/components/Media";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero />
        <Intro />
        <Services />
        <Media />
      </main>
    </div>
  );
}
