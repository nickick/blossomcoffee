import { cn } from "@/utils/cn";
import { SiFacebook, SiX } from "@icons-pack/react-simple-icons";
import Image from "next/image";
import Link from "next/link";
import { raleway } from "../fonts";

function Contact() {
  return (
    <div
      className={cn(
        raleway.className,
        "flex flex-col gap-8 w-full max-w-screen-lg mx-auto p-8 xl:p-0"
      )}
    >
      <Image
        src="/bean_large.jpg"
        alt="banner"
        width={1000}
        height={300}
        className="w-full h-full object-cover rounded-lg drop-shadow"
      />
      <h1 className="text-4xl font-light">Get in Touch</h1>
      <div className="flex flex-col gap-8">
        Please feel free to contact us at any time:
        <div>
          T:{" "}
          <Link
            href="tel:+14155239295"
            className="border-b border-black hover:text-gray-500 transition-colors"
          >
            415.523.9295
          </Link>
        </div>
        <div>
          E:{" "}
          <Link
            href="mailto:info@blossomcoffee.com"
            className="border-b border-black hover:text-gray-500 transition-colors"
          >
            info@blossomcoffee.com
          </Link>
        </div>
        <div>
          For press/media inquiries, please contact:{" "}
          <Link
            href="mailto:press@blossomcoffee.com"
            className="border-b border-black hover:text-gray-500 transition-colors"
          >
            press@blossomcoffee.com
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl">Hours</h3>
          <p>
            Monday - Friday: 9:30 AM - 6:30 PM PST
            <br />
            Saturday/Sunday: by appointment
          </p>
        </div>
        <div className="flex gap-2 py-8">
          <Link href="https://x.com/blossomcoffee" target="_blank">
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
    </div>
  );
}

export default Contact;
