"use client";

import { cn } from "@/lib/utils";
import React from "react";

type AnimatedButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export function AnimatedButton({ children, className }: AnimatedButtonProps) {
  return (
    <button
      className={cn(
        "btn-31 border-white/20 border text-white bg-black relative uppercase px-8 py-4 font-black",
        className
      )}
    >
      <span className="overflow-hidden relative block">
        <span className="block font-black mix-blend-difference relative group-hover:animate-move-up-alternate">
          {children}
        </span>
      </span>
    </button>
  );
}
