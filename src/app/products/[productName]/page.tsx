"use client";

import { cn } from "@/utils/cn";
import { raleway } from "@/app/fonts";
import { useParams } from "next/navigation";
import Link from "next/link";
import { products } from "@/app/products";
import Image from "next/image";
import { ArrowLeft, ChevronLeft } from "lucide-react";
function Product() {
  const { productName } = useParams();

  const product = products[productName as keyof typeof products];

  if (!product) {
    return (
      <div className={cn(raleway.className, "p-8 xl:p-0")}>
        <div className="flex flex-col items-center justify-center p-24 gap-8 w-full max-w-screen-lg mx-auto">
          <h1 className="text-4xl font-bold">Product not found</h1>
          <Link
            href="/products"
            className="border-b border-black hover:text-gray-500 transition-all"
          >
            Back to products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(raleway.className, "p-8 xl:p-0")}>
      <div className="flex flex-col gap-8 w-full max-w-screen-lg mx-auto mb-4 md:px-8">
        <div className="flex gap-2 items-end justify-between">
          <h1 className="text-4xl mt-10">{product.name}</h1>
          <Link
            href="/products"
            className="hover:text-gray-500 transition-all flex items-center gap-0"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to products
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          {product.image && (
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="w-72 h-72 md:w-full md:h-full md:max-w-96 mx-auto object-cover my-8"
            />
          )}
          {product.description.map((description) => (
            <p key={description}>{description}</p>
          ))}
          <div className="flex flex-col gap-2">
            {product.tags.map((tag) => (
              <p key={tag.key}>
                <strong>{tag.key}:</strong> {tag.value}
              </p>
            ))}
          </div>
          {product.lastLine && (
            <div
              className="mt-4"
              dangerouslySetInnerHTML={{ __html: product.lastLine }}
            />
          )}
        </div>
        <Link
          href="/products"
          className="underline hover:text-gray-500 transition-all flex items-center gap-0"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to products
        </Link>
      </div>
    </div>
  );
}

export default Product;
