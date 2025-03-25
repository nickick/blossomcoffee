"use client";

import Link from "next/link";
import Image from "next/image";
import { SiX, SiFacebook } from "@icons-pack/react-simple-icons";
import Hamburger from "hamburger-react";
import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { cn } from "@/utils/cn";
import useIsMobile from "@/hooks/useIsMobile";

function MobileNav({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      className={cn(
        "flex justify-between absolute top-0 left-0 w-[calc(100%-1rem)] h-full bg-white transition-all p-4 border-l border-l-black",
        isOpen ? "left-[1rem]" : "left-full"
      )}
    >
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <Link href="/one-brewer">One Brewer</Link>
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="flex flex-col gap-4">
          <Link href="https://x.com/BlossomCoffee" target="_blank">
            <SiX />
          </Link>
          <Link
            href="https://www.facebook.com/blossomcoffeeinc"
            target="_blank"
          >
            <SiFacebook />
          </Link>
        </div>
      </div>
      <Hamburger toggled={isOpen} toggle={toggle} />
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isOpen && !isMobile) {
      setIsOpen(false);
    }
  }, [isMobile, isOpen]);

  return (
    <nav className="flex justify-between items-end px-4 py-4">
      <Link href="/">
        <Image src="/logo_clear_blk.png" alt="logo" width={150} height={150} />
      </Link>
      <div className="hidden sm:flex gap-4">
        <Link href="/one-brewer">One Brewer</Link>
        <Link href="/work">Work</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="hidden sm:flex gap-4">
        <Link href="https://x.com/BlossomCoffee" target="_blank">
          <SiX />
        </Link>
        <Link href="https://www.facebook.com/blossomcoffeeinc" target="_blank">
          <SiFacebook />
        </Link>
      </div>
      <div className="sm:hidden flex gap-4">
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </div>
      <MobileNav isOpen={isOpen} toggle={setIsOpen} />
    </nav>
  );
}

export { Navbar };
