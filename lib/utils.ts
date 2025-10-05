import { type ClassNameValue, twMerge } from "tailwind-merge";

export function tm(...classNames: ClassNameValue[]) {
  return twMerge(classNames);
}
