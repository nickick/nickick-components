/** @type {import('tailwindcss').Config} */

import type { Config } from "tailwindcss";
import sharedConfig from "@nickick/tailwind-config";

const generateLeftOffsets = () => {
  // Generate values from -16 to +16, stepping by 4
  const offsets = Array.from({ length: 200 }, (_, i) => -100 + i);
  return offsets
    .map((num) => `left-[${num}px]`)
    .concat(offsets.map((num) => `left-[${num}%]`));
};

const config: Pick<Config, "content" | "presets" | "safelist"> = {
  content: ["./app/**/*.tsx"],
  presets: [sharedConfig],
  safelist: [
    ...generateLeftOffsets(),
    "z-[10]",
    "z-[20]",
    "z-[30]",
    "z-[40]",
    "z-[50]",
    "z-[60]",
  ],
};

export default config;
