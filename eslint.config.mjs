import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      "react/no-unescaped-entities": "off",
      // Repository-owned images intentionally use native img elements so page
      // rendering does not depend on an image optimization service at runtime.
      "@next/next/no-img-element": "off",
      "react-hooks/purity": "error",
      "react-hooks/set-state-in-effect": "warn",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    ".next-locked-*/**",
    ".agents/**",
    ".vercel/**",
    "node_modules/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "*.log",
    "*.tsbuildinfo",
  ]),
]);

export default eslintConfig;
