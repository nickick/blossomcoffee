import Image from "next/image";
import { cn } from "@/utils/cn";
import { raleway } from "@/app/fonts";
import Link from "next/link";

type Media = {
  link: string;
  image: string;
  alt: string;
};

const media: Media[] = [
  {
    link: "http://robbreport.com/home-design/frontrunners-not-your-average-joe",
    image: "/media_logos/robbins.png",
    alt: "Robbreport",
  },
  {
    link: "https://abcnews.go.com/GMA/video/apple-nasa-engineers-create-heat-controlling-coffee-maker-17359351",
    image: "/media_logos/goodmorning.png",
    alt: "Good Morning America",
  },
  {
    link: "http://www.npr.org/2012/10/02/162135717/the-last-word-in-business",
    image: "/media_logos/npr.png",
    alt: "NPR",
  },
  {
    link: "https://www.forevergeek.com/blossom-coffee-what-you-get-when-you-put-apple-and-nasa-engineers-together/",
    image: "/media_logos/forever.png",
    alt: "Forever Geek",
  },
  {
    link: "http://www.selectism.com/2012/10/02/blossom-one-limited-11111-coffee-maker/",
    image: "/media_logos/selectism.png",
    alt: "Selectism",
  },
  {
    link: "http://www.dearcoffeeiloveyou.com/the-blossom-one-coffee-brewer/",
    image: "/media_logos/coffee_love.png",
    alt: "Dear Coffee I Love You",
  },
  {
    link: "http://theshot.coffeeratings.com/2012/09/blossom-coffee-techcrunch-disrupt/",
    image: "/media_logos/shot.png",
    alt: "The Shot",
  },
  {
    link: "https://www.huffingtonpost.com/2012/10/01/blossom-one-limited-apple-nasa-coffee-machine_n_1920529.html",
    image: "/media_logos/huffpo.png",
    alt: "Huffington Post",
  },
  {
    link: "https://mashable.com/2012/10/02/11000-coffee-machine/",
    image: "/media_logos/mashable.png",
    alt: "Mashable",
  },
  {
    link: "https://www.theverge.com/2012/10/1/3432980/blossom-one-limited-coffee-maker-11111",
    image: "/media_logos/verge.png",
    alt: "The Verge",
  },
  {
    link: "https://abcnews.go.com/blogs/business/2012/09/former-apple-nasa-engineers-make-11111-coffee-maker/",
    image: "/media_logos/abc.png",
    alt: "ABC News",
  },
  {
    link: "http://www.bbc.com/news/technology-19655627",
    image: "/media_logos/bbc.png",
    alt: "BBC",
  },
];

function Media() {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-4 w-full max-w-screen-lg mx-auto border-t pt-16 pb-8 mb-12 sm:px-8 md:px-8 xl:px-0",
        raleway.className
      )}
    >
      <h3 className="text-2xl sm:text-4xl font-light pb-8">
        Blossom Coffee as featured on:
      </h3>
      <div className="w-3/4 sm:w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-16 sm:gap-8 md:gap-20">
        {media.map((item) => (
          <Link href={item.link} key={item.alt}>
            <Image
              src={item.image}
              alt={item.alt}
              width={100}
              height={100}
              className="w-full max-w-[10rem] h-full object-contain"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export { Media };
