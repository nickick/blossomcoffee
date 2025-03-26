import { raleway } from "@/app/fonts";
import { cn } from "@/utils/cn";
import {
  ChartCandlestick,
  CircuitBoard,
  Microchip,
  PencilRulerIcon,
  PocketKnife,
  SearchSlash,
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

const services: Service[] = [
  {
    title: "User Study & Industrial Design",
    description:
      "We talk to end users in order to better understand their needs and help our clients create industrial designs that are people-centered.",
    icon: <PencilRulerIcon className="w-10 h-10 sm:w-14 sm:h-14" />,
  },
  {
    title: "Instrumentation & Testing",
    description:
      "We build testing instrumentation to gather experimental data. All our designs are data-driven and backed by research.",
    icon: <ChartCandlestick className="w-10 h-10 sm:w-14 sm:h-14" />,
  },
  {
    title: "Mechanical Engineering",
    description:
      "We use computer-aided design to create parts, assemblies and entire products. We also do design for manufacturing and BOM generation.",
    icon: <PocketKnife className="w-10 h-10 sm:w-14 sm:h-14" />,
  },
  {
    title: "Electrical Engineering",
    description:
      "We provide integrated hardware solutions from building functional prototypes to shipping final products. We offer expertise in component selection, schematic design, and PCB layout.",
    icon: <CircuitBoard className="w-10 h-10 sm:w-14 sm:h-14" />,
  },
  {
    title: "Firmware Development & Control Systems",
    description:
      "We provide integrated hardware solutions from building functional prototypes to shipping final products. We offer expertise in component selection, schematic design, and PCB layout.",
    icon: <Microchip className="w-10 h-10 sm:w-14 sm:h-14" />,
  },
  {
    title: "Sourcing & Manufacturing",
    description:
      "We have a track record of finding rare and uncommon manufacturers, but we don’t stop there. We help set up manufacturing and implement processes and quality control.",
    icon: <SearchSlash className="w-10 h-10 sm:w-14 sm:h-14" />,
  },
];

function ServiceCard(props: { service: Service }) {
  return (
    <div className="flex flex-col gap-4 items-center w-3/4 sm:w-full mx-auto">
      {props.service.icon && props.service.icon}
      <h3 className="text-xl sm:text-2xl">{props.service.title}</h3>
      <p className="text-sm sm:text-base">{props.service.description}</p>
    </div>
  );
}

function Services() {
  return (
    <div className={cn("flex flex-col gap-12 w-full", raleway.className)}>
      <div className="flex flex-col gap-2 items-center bg-[#eee] p-8 rounded-lg w-full">
        <h2 className="text-[3rem] font-light">Services</h2>
        <p className="text-center">
          Your in-house engineering team, outsourced.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-screen-lg w-full mx-auto px-8 sm:px-8 md:px-8 xl:px-0">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </div>
  );
}

export { Services };
