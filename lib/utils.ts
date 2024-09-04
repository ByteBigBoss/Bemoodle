import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getEnv = () => {
  const bemoodleApiUrl = process.env.NEXT_PUBLIC_BEMOODLE_API_URL;

  if (!bemoodleApiUrl) {
    throw new Error("NEXT_PUBLIC_BEMOODLE_API_URL is not defined in the environment variables");
  }

  return {
    bemoodleApiUrl,
  };
};
