"use client";

import { raleway } from "@/app/fonts";
import { cn } from "@/utils/cn";
import { SiFacebook, SiX } from "@icons-pack/react-simple-icons";
import Hamburger from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

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
        "flex sm:hidden justify-between absolute top-0 left-0 w-[calc(100%-1rem)] h-full bg-white transition-all p-4 py-6 border-l border-l-black z-20",
        isOpen ? "left-[1rem]" : "left-full",
        `${raleway.className}`
      )}
    >
      <div className="flex flex-col gap-12 relative w-full">
        <div className="flex flex-col gap-4">
          <Link href="/products" onClick={() => toggle(false)}>
            Our Products
          </Link>
          <Link href="/about" onClick={() => toggle(false)}>
            About
          </Link>
          <Link href="/contact" onClick={() => toggle(false)}>
            Contact
          </Link>
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
        <div className="absolute -top-2 right-0">
          <Hamburger toggled={isOpen} toggle={toggle} />
        </div>
      </div>
    </div>
  );
}

function LinkWithUnderline({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="border-b border-transparent hover:border-black transition-all"
    >
      {children}
    </Link>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-end px-4 py-4 max-w-screen-lg w-[100vw] overflow-x-hidden mx-auto border-b">
      <Link href="/">
        <Image src="/logo_clear_blk.png" alt="logo" width={150} height={150} />
      </Link>
      <div className="hidden sm:flex gap-4">
        <LinkWithUnderline href="/products">Our Products</LinkWithUnderline>
        <LinkWithUnderline href="/about">About</LinkWithUnderline>
        <LinkWithUnderline href="/contact">Contact</LinkWithUnderline>
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
