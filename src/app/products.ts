type Product = {
  name: string;
  shortDescription: string;
  description: string[];
  tags: {
    key: string;
    value: string;
  }[];
  image: string;
  lastLine?: string;
};
export const products: Record<string, Product> = {
  oneBrewer: {
    name: "The One Brewer by Blossom Coffee",
    shortDescription:
      "The One Brewer, entirely engineered by our own Blossom Coffee team, is like a sous vide for coffee—it maintains a single temperature for any length of time, accurate within a single degree Fahrenheit. The One Brewer utilizes PID temperature control on both the water boiler and the brew group to produce an extraordinarily controlled and precise brewing environment. Single temperature brewing removes bitterness caused by high temperature peaks and sourness from cooler temperature lows, giving you powerful control to dial in specific flavors.",
    description: [
      "The One Brewer, entirely engineered by our own Blossom Coffee team, is like a sous vide for coffee—it maintains a single temperature for any length of time, accurate within a single degree Fahrenheit. The One Brewer utilizes PID temperature control on both the water boiler and the brew group to produce an extraordinarily controlled and precise brewing environment. Single temperature brewing removes bitterness caused by high temperature peaks and sourness from cooler temperature lows, giving you powerful control to dial in specific flavors.",
    ],
    tags: [
      {
        key: "Release Date",
        value: "2014",
      },
    ],
    image: "/one-brewer.png",
  },
  stagg: {
    name: "Stagg EKG by Fellow Products",
    shortDescription:
      "Say hello to the Stagg EKG, an electric pour-over kettle that pours as good as it looks. The Stagg EKG is the electric version of the original Stagg kettle, fully loaded with advanced features that make brewing even easier. The EKG comes with variable temperature control, an LCD display screen, and the ability to connect via Bluetooth to a scale or tablet to monitor temperature and transmit data wirelessly.",
    description: [
      "Say hello to the Stagg EKG, an electric pour-over kettle that pours as good as it looks. The Stagg EKG is the electric version of the original Stagg kettle, fully loaded with advanced features that make brewing even easier. The EKG comes with variable temperature control, an LCD display screen, and the ability to connect via Bluetooth to a scale or tablet to monitor temperature and transmit data wirelessly.",
    ],
    tags: [
      {
        key: "Client",
        value: "Fellow Products",
      },
      {
        key: "Year Announced",
        value: "2017",
      },
      {
        key: "Services",
        value: "Technical design reviews",
      },
    ],
    image: "/stagg.png",
  },
  de1: {
    name: "The DE1 by Decent Espresso",
    shortDescription:
      "The DE1, by Decent Espresso, is the first of its kind - a low-cost countertop espresso machine, that delivers quality espresso through the unprecedented use of novel technology their team has created. With the DE1, users will have control over temperature and pressure and are able to monitor parameters such as flow rate, ambient humidity, and the actual temperature in the grouphead (using a thermal probe).",
    description: [
      "The DE1, by Decent Espresso, is the first of its kind - a low-cost countertop espresso machine, that delivers quality espresso through the unprecedented use of novel technology their team has created. With the DE1, users will have control over temperature and pressure and are able to monitor parameters such as flow rate, ambient humidity, and the actual temperature in the grouphead (using a thermal probe).",
    ],
    tags: [
      {
        key: "Client",
        value: "Decent Espresso",
      },
      {
        key: "Year Announced",
        value: "2017",
      },
      {
        key: "Services",
        value: "Technical design reviews",
      },
    ],
    image: "/decentExpresso.jpg",
  },
  blueBottleDripper: {
    name: "Blue Bottle Dripper",
    shortDescription:
      "From Sprudge.com founder Jordan Michelman: “Outwardly it's a new coffee dripper like the ones you've seen before: a ceramic, flat-bottomed half-cone vessel that holds a paper filter, which in turn holds ground coffee. You pour hot water through the coffee at a certain ratio, it drips down from the cone, and voila: you've got a cup of brew…. [however] it's the proverbial better mousetrap, at once familiar and brand new, designed for consumer convenience but with a geek pedigree to satisfy the nerdiest of coffee brains.",
    description: [
      "From Sprudge.com founder Jordan Michelman: “Outwardly it's a new coffee dripper like the ones you've seen before: a ceramic, flat-bottomed half-cone vessel that holds a paper filter, which in turn holds ground coffee. You pour hot water through the coffee at a certain ratio, it drips down from the cone, and voila: you've got a cup of brew…. [however] it's the proverbial better mousetrap, at once familiar and brand new, designed for consumer convenience but with a geek pedigree to satisfy the nerdiest of coffee brains.",
    ],
    tags: [
      {
        key: "Client",
        value: "Blue Bottle",
      },
      {
        key: "Year Announced",
        value: "2016",
      },
      {
        key: "Services",
        value:
          "Research & Development, Industrial Design, Test Planning and Instrumentation, Data Analysis, Prototyping, Manufacturing and Vendor Liason",
      },
    ],
    image: "/blue-bottle-dripper.jpg",
  },
  prismo: {
    name: "Prismo by Fellow Products",
    shortDescription:
      "Meet Prismo, an Aeropress ® attachment that unlocks espresso-style coffee without an espresso machine. Prismo is a pressure actuated valve designed to be used with the Aeropress ® Coffee Maker. This attachment allows for a buildup of pressure to create espresso-style coffee and creates a no drip seal for a full immersion brew. Syrupy and full-bodied, Prismo's quick punch of caffeine will save the day… or at least your morning.",
    description: [
      "Meet Prismo, an Aeropress ® attachment that unlocks espresso-style coffee without an espresso machine. Prismo is a pressure actuated valve designed to be used with the Aeropress ® Coffee Maker. This attachment allows for a buildup of pressure to create espresso-style coffee and creates a no drip seal for a full immersion brew. Syrupy and full-bodied, Prismo's quick punch of caffeine will save the day… or at least your morning.",
    ],
    tags: [
      {
        key: "Client",
        value: "Fellow Products",
      },
      {
        key: "Year Announced",
        value: "2017",
      },
      {
        key: "Services",
        value:
          "Concept Development, Strategy, Intellectual Property, Recipe Development, Product Design Engineering, Testing, and Manufacturing",
      },
    ],
    image: "/prismo.jpg",
    lastLine:
      "Learn more here: <a href='http://fellowproducts.com/prismo/' target='_blank'>http://fellowproducts.com/prismo/</a>",
  },
};
