import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
export default function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen w-full max-w-screen-lg mx-auto">
      <Navbar />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></main>
      <Footer />
    </div>
  );
}
