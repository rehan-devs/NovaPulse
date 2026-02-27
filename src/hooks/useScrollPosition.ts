"use client";

import { useState, useEffect, useCallback } from "react";

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    setScrollDirection(currentScrollY > scrollY ? "down" : "up");
    setScrollY(currentScrollY);
    setIsScrolled(currentScrollY > 50);
  }, [scrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { scrollY, scrollDirection, isScrolled };
}