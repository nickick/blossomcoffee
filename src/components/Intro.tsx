import { cn } from "@/utils/cn";
import { raleway } from "@/app/fonts";
import Image from "next/image";
function Intro() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 px-8 sm:px-8 xl:px-0 sm:gap-12 max-w-screen-lg w-full mx-auto border-t pt-16 sm:pt-16 pb-8">
      <Image
        src="/Precision_Flavor2.jpg"
        alt="Blossom Coffee"
        className="rounded-xl"
        width={600}
        height={600}
      />
      <div className={cn("flex flex-col gap-4 ", raleway.className)}>
        <h2 className="text-2xl font-light">
          Blossom Coffee is a design and product development firm that
          specializes in coffee.
        </h2>
        <p className="text-lg">
          Blossom provides the expertise, facilities, tools, and equipment to
          build new hardware products. We sweat the details of how coffee is
          made to deliver intuitive products that make coffee better.
        </p>
      </div>
    </div>
  );
}

export { Intro };
