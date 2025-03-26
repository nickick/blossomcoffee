import { cn } from "@/utils/cn";
import { raleway } from "./fonts";
import Link from "next/link";

function NotFound() {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center h-[50vh] px-12 gap-8",
        raleway.className
      )}
    >
      <h1 className="text-4xl font-bold">404 Page not found</h1>
      <p className="text-lg">The page you are looking for does not exist.</p>
      <Link href="/" className="text-primary">
        Home
      </Link>
    </div>
  );
}

export default NotFound;
