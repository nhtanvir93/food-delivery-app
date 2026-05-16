import { defineConfig } from "eslint/config";
import expoConfig from "eslint-config-expo/flat.js";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import reactNative from "eslint-plugin-react-native";
import tailwindPlugin from "eslint-plugin-tailwindcss";
import unusedImports from "eslint-plugin-unused-imports";
import { plugin as tsPlugin } from "typescript-eslint";

export default defineConfig([
  // ── Base: Expo recommended ────────────────────────────────────────────
  ...expoConfig,

  // ── Tailwind / NativeWind className sorting ───────────────────────────
  ...tailwindPlugin.configs["flat/recommended"],

  // ── Prettier (disables conflicting formatting rules) ─────────────────
  prettierConfig,

  // ── Rules for all files (no type info needed) ─────────────────────────
  {
    plugins: {
      prettier: prettierPlugin,
      "unused-imports": unusedImports,
      "react-native": reactNative,
      "@typescript-eslint": tsPlugin,
    },

    rules: {
      // ── Prettier ──────────────────────────────────────────────────────
      "prettier/prettier": "error",

      // ── Unused imports / variables ────────────────────────────────────
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

      // ── React Hooks ───────────────────────────────────────────────────
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // ── React Native ──────────────────────────────────────────────────
      "react-native/no-inline-styles": "warn",
      "react-native/no-unused-styles": "warn",
      "react-native/split-platform-components": "warn",

      // ── Import hygiene ────────────────────────────────────────────────
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
      "import/newline-after-import": "error",
      "import/no-cycle": "warn",

      // ── Tailwind / NativeWind ─────────────────────────────────────────
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-contradicting-classname": "error",
      "tailwindcss/no-unnecessary-arbitrary-value": "warn",

      // ── React ─────────────────────────────────────────────────────────
      "react/self-closing-comp": "error",
      "react/jsx-boolean-value": ["error", "never"],
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "never" },
      ],
      "react/jsx-no-useless-fragment": "warn",
      "react/no-unstable-nested-components": "warn",

      // ── General quality ───────────────────────────────────────────────
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      "no-var": "error",
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
    },
  },

  // ── TypeScript rules that require type information ────────────────────
  // Scoped to app TS/TSX files only — excludes config files like eslint.config.js
  {
    files: [
      "app/**/*.{ts,tsx}",
      "components/**/*.{ts,tsx}",
      "hooks/**/*.{ts,tsx}",
      "lib/**/*.{ts,tsx}",
      "utils/**/*.{ts,tsx}",
      "src/**/*.{ts,tsx}",
    ],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/await-thenable": "error",
    },
  },

  // ── Line length ───────────────────────────────────────────────────────
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

  // ── Ignore patterns ───────────────────────────────────────────────────
  {
    ignores: [
      "node_modules/**",
      ".expo/**",
      "dist/**",
      "build/**",
      "coverage/**",
      "android/**",
      "ios/**",
      "scripts/**",
      "babel.config.cjs",
      "metro.config.cjs",
      "tailwind.config.cjs",
    ],
  },
]);
