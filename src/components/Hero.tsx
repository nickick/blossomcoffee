import Image from "next/image";
import { raleway, bebasNeue } from "@/app/fonts";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "./Button";

function Hero() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-3/4 mx-auto pb-6 sm:pb-0 py-8">
      <Image
        src="/blossomB.png"
        alt="Hero"
        width={600}
        height={600}
        className="w-1/2 sm:w-full pt-8 sm:pt-0"
      />
      <div className="flex flex-col justify-center items-center gap-8 w-full">
        <h1
          className={cn(
            "text-[2rem] sm:text-[5rem] leading-[1.1em] text-center font-thin",
            raleway.className
          )}
        >
          Precision
          <br />
          <span
            className={cn(
              "text-[3.5rem] sm:text-[10rem] text-primary uppercase leading-[0.5em] relative top-2.5 sm:top-5",
              bebasNeue.className
            )}
          >
            Coffee
          </span>
          <br />
          Engineering
        </h1>
        <div
          className={cn(
            "flex flex-col items-center gap-4 sm:gap-2 w-full",
            raleway.className
          )}
        >
          <div className="flex flex-col items-center sm:gap-2">
            <p>Introducing the</p>
            <p className="font-bold">Blossom One Brewer</p>
            <Link
              href="https://youtu.be/TXHnIKDieWg"
              target="_blank"
              className="flex relative group font-light text-primary"
            >
              Watch video
              <ChevronRight className="absolute -right-5 group-hover:translate-x-0.5 transition-all duration-300" />
              <ChevronRight className="absolute -right-7 group-hover:translate-x-1 transition-all duration-300" />
            </Link>
          </div>
          <Button className="w-1/2 sm:w-auto">Order now</Button>
        </div>
      </div>
    </div>
  );
}

export { Hero };
