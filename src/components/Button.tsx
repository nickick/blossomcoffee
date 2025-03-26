import { cn } from "@/utils/cn";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "bg-primary text-white px-4 py-2 rounded-md hover:cursor-pointer hover:bg-primary/80 transition-all duration-300",
        props.className
      )}
    >
      {props.children}
    </button>
  );
}

export { Button };
