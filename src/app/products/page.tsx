"use client";

import { cn } from "@/utils/cn";
import { raleway } from "../fonts";
import Image from "next/image";
import { products } from "../products";
import Link from "next/link";

function Products() {
  return (
    <div
      className={cn(
        raleway.className,
        "p-8 xl:p-0 flex flex-col gap-4 w-full max-w-screen-lg mx-auto"
      )}
    >
      <Image
        src="/bean_large.jpg"
        alt="banner"
        width={1000}
        height={300}
        className="w-full h-full object-cover rounded-lg drop-shadow"
      />
      <h1 className="text-4xl mt-12 md:px-8">Our Products</h1>
      <div className="flex flex-col gap-12 md:px-8">
        {Object.keys(products).map((product) => {
          function handleViewProduct() {
            window.open(`/products/${product}`, "_blank");
          }
          return (
            <div
              className="flex flex-col items-center md:flex-row gap-8 border-b border-gray-500 pb-12"
              key={product}
            >
              <Image
                src={products[product].image}
                alt={products[product].name}
                width={300}
                height={300}
                className="w-full h-full max-w-64 md:w-48 md:h-48 object-contain rounded-lg mx-auto"
              />
              <div className="flex flex-col gap-4">
                <Link
                  href={`/products/${product}`}
                  key={product}
                  className="hover:underline"
                >
                  <p className="text-2xl">{products[product].name}</p>
                </Link>
                <p>{products[product].shortDescription}</p>
                <button
                  className="bg-primary text-white px-4 py-2 rounded-lg w-36 self-end hover:bg-primary/80 transition-all cursor-pointer mx-auto md:mx-0"
                  onClick={handleViewProduct}
                >
                  View Product
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
