/** @type {import('tailwindcss').Config} */

import type { Config } from "tailwindcss";
import sharedConfig from "@nickick/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./app/**/*.tsx"],
  presets: [sharedConfig],
};

export default config;
