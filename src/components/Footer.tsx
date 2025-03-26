import { SiFacebook } from "@icons-pack/react-simple-icons";
import { SiX } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { LinkWithHover } from "./LinkWithHover";

function Footer() {
  return (
    <footer>
      <div className="w-full border-b-1"></div>
      <div className="row-start-3 flex sm:flex-row flex-col p-8 sm:p-4 md:p-8 gap-6 flex-wrap items-start justify-between max-w-screen-lg w-full mx-auto">
        <div className="flex sm:flex-col gap-2 sm:gap-0">
          <span className="font-bold">Links</span>
          <LinkWithHover href="/one-brewer">One Brewer</LinkWithHover>
          <LinkWithHover href="/work">Work</LinkWithHover>
          <LinkWithHover href="/about">About</LinkWithHover>
          <LinkWithHover href="/contact">Contact</LinkWithHover>
        </div>
        <div className="flex sm:flex-col gap-2">
          <span className="font-bold">Socials</span>
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
        <div className="flex flex-col gap-0">
          <span className="font-bold">Get in touch</span>
          Please feel free to contact us at any time.
          <LinkWithHover href="tel:+4155239295">+415.523.9295</LinkWithHover>
          <LinkWithHover href="mailto:info@blossomcoffee.com">
            info@blossomcoffee.com
          </LinkWithHover>
        </div>
        <div className="flex flex-col gap-0">
          <span className="font-bold">Hours</span>
          <span>Monday - Friday: 9:30am - 6:30pm</span>
          <span>Saturday/Sunday: by appointment</span>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
