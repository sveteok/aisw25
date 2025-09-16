import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  tseslint.configs.recommended,
  {
    rules: {
      // "no-unused-vars": "warn", // This is the default ESLint rule for unused variables, ESLint ignores it because it’s the wrong rule for TypeScript.
      "@typescript-eslint/no-unused-vars": "warn",
      "no-constant-condition": "warn",
      curly: "error",
      "no-console": "warn",
    },
  },
]);

/*
Output after running `npm run lint`:
> e5-eslint-rules@1.0.0 lint
> eslint . --ext .ts


...aisw25-svetlana-teryaeva/js-and-ts/7-npm-and-eslint/e5-eslint-rules/e5.ts
  1:7   warning  'unusedVar' is assigned a value but never used  @typescript-eslint/no-unused-vars
  4:5   warning  Unexpected constant condition                   no-constant-condition
  4:11  error    Expected { after 'if' condition                 curly
  4:11  warning  Unexpected console statement                    no-console

✖ 4 problems (1 error, 3 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.
*/
