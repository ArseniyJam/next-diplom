import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

export function getStrapiURL() {
   return process.env.BACKEND_URL ?? "http://localhost:1337";
}

export function getStrapiMedia(url: string) {
   if (url.startsWith("http")) {
      return url;
   }
   return getStrapiURL() + url;
}
