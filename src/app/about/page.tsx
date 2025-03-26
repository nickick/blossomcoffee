import { cn } from "@/utils/cn";
import { raleway } from "../fonts";

type AboutText = {
  title: string;
  description: string[];
};

const aboutText: AboutText[] = [
  {
    title: "What exactly is “good coffee” to Blossom?",
    description: [
      "We believe that good coffee encompasses more than just a tasty cup. Good taste is of course an essential element to good coffee. We believe that the adjective “good” in this context can be expanded to comment on other vital parts of the coffee production and consumption experience. More specifically, we believe that good coffee should also be environmentally sustainable. We also believe that good coffee can support fair prices and business opportunities for all.",
    ],
  },
  {
    title: "Why does it matter to be “more accessible”?",
    description: [
      "We believe that accessible coffee is both affordable and easy to prepare.",
      "Consumer interest in specialty coffee is growing rapidly. However, many current technologies for producing specialty coffee have limitations that hinder this growth. From farming to shipping to roasting to packaging to brewing, there is opportunity to increase the accessibility of good coffee to the average consumer.",
    ],
  },
  {
    title: "So…how does Blossom Coffee do that?",
    description: [
      "We believe that research, engineering, and thoughtful design can help make breakthrough products for coffee drinkers. Through partnerships, consulting projects, and innovating on our own products, we strive to invent technologies that make good coffee an everyday experience.",
    ],
  },
];

function AboutText(props: AboutText) {
  return (
    <div key={props.title} className="flex flex-col gap-4">
      <p className="text-2xl font-light">{props.title}</p>
      {props.description.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

const secondAboutText: AboutText[] = [
  {
    title: "So you might be wondering… how did Blossom get started?",
    description: [
      "Blossom was founded in 2012. We started off by designing the Blossom One Brewer, a precision single-cup coffee brewer intended for cafes, research labs, and enthusiasts. Over the next few years, we took the design from rough prototypes to a product that was made in Japan and shipping all over the world. We received a number of awards and mentions in the media. We even served coffee to the hip hop star, 2Chainz.",
      "Our design process for the One Brewer involved significant research and experimental validation of calculated results. As this process became more well known, we started to receive requests from other companies to help with their products. That’s when we started doing consulting work alongside of improving and selling the One Brewer.",
      "We shipped our first product from a consulting relationship, the Blue Bottle Dripper in December 2016.",
    ],
  },
  {
    title: "What can we do for you?",
    description: [
      "We offer engineering services spanning mechanical, electrical, and industrial design, to instrumentation and testing, to sourcing and manufacturing, to market and customer research. We work with our clients throughout every step of the product development cycle.",
      "We are always looking for new opportunities to apply our engineering and design process in partnership with great people. If you have a product idea you would like some help with, please feel free to reach out any time. To work with us, please send us an e-mail at info@blossomcoffee.com.",
    ],
  },
];
export default function About() {
  return (
    <div
      className={cn(
        "p-8 flex flex-col items-center justify-center max-w-screen-lg w-full mx-auto",
        raleway.className
      )}
    >
      <h1 className="text-4xl font-light text-center pb-8">
        “Our mission is to invent technologies that make good coffee more
        accessible.”
      </h1>
      <div className="flex flex-col gap-4 py-4">
        {aboutText.map((item) => (
          <AboutText key={item.title} {...item} />
        ))}
      </div>
      <h2 className="text-4xl font-light py-8">The History of Blossom</h2>
      <div className="flex flex-col gap-4 py-4">
        {secondAboutText.map((item) => (
          <AboutText key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}
