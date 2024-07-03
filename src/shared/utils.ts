import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const shuffle = <T extends unknown>(array: T[]): T[] =>
  array
    .map((value) => ({ value, _sort: Math.random() }))
    .sort((a, b) => a._sort - b._sort)
    .map(({ value }) => value);
