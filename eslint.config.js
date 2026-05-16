import { defineConfig } from "eslint/config";
import expoConfig from "eslint-config-expo/flat.js";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import tailwindPlugin from "eslint-plugin-tailwindcss";
import unusedImports from "eslint-plugin-unused-imports";

export default defineConfig([
  // ── Base: Expo recommended (includes React, React Native, TypeScript, import) ──
  ...expoConfig,

  // ── Tailwind / NativeWind className sorting ──
  ...tailwindPlugin.configs["flat/recommended"],

  // ── Prettier (disables conflicting formatting rules) ──
  prettierConfig,

  // ── Custom rules ──
  {
    plugins: {
      prettier: prettierPlugin,
      "unused-imports": unusedImports,
      // NOTE: "import" plugin already registered by eslint-config-expo — do not redeclare
    },

    rules: {
      // ── Prettier formatting ──
      "prettier/prettier": "error",

      // ── Unused imports / variables ──
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      // ── Import ordering (plugin already loaded by expo config) ──
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "import/no-duplicates": "error",

      // ── Tailwind class sorting ──
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-contradicting-classname": "error",
      "tailwindcss/no-unnecessary-arbitrary-value": "warn",

      // ── React ──
      "react/self-closing-comp": "error",
      "react/jsx-boolean-value": ["error", "never"],
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "never" },
      ],

      // ── General code quality ──
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      "no-var": "error",
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
    },
  },

  // ── File-specific: line length ──
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "max-len": [
        "warn",
        {
          code: 100,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreComments: true,
        },
      ],
    },
  },

  // ── Ignore patterns ──
  {
    ignores: [
      "node_modules/**",
      ".expo/**",
      "dist/**",
      "build/**",
      "scripts/**",
      "babel.config.js",
      "metro.config.js",
      "tailwind.config.js",
    ],
  },
]);
