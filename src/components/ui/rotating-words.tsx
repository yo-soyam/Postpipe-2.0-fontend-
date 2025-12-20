"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface RotatingWordsProps {
  words: string[];
  className?: string;
}

export function RotatingWords({ words, className }: RotatingWordsProps) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const fadeTimeout = setTimeout(() => {
        setFade(false); // Start fade out
        const changeWordTimeout = setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
            setFade(true); // Start fade in
        }, 500); // Time for fade-out animation
        
        return () => clearTimeout(changeWordTimeout);
    }, 2000); // Time the word is displayed

    return () => clearTimeout(fadeTimeout);
  }, [index, words.length]);

  return (
    <div className={cn("text-center", className)}>
        <p className="text-lg text-muted-foreground max-w-3xl">
            The largest Next.js backend component <span className={cn("transition-opacity duration-500", fade ? "opacity-100" : "opacity-0")}>{words[index]}</span>
        </p>
    </div>
  );
}
