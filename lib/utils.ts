import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getEnv = () => {
  const BEMOODLE_API_URL = process.env.NEXT_PUBLIC_BEMOODLE_API_URL;

  if (!BEMOODLE_API_URL) {
    throw new Error("NEXT_PUBLIC_BEMOODLE_API_URL is not defined in the environment variables");
  }

  return {
    BEMOODLE_API_URL,
  };
};
