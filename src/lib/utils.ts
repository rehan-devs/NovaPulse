import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function staggerDelay(index: number, baseDelay: number = 100): string {
  return `${index * baseDelay}ms`;
}