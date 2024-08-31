import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "no-unused-vars": "off",
      "no-console": "error",
      "@typescript-eslint/no-explicit-any": "off",
      'prettier/prettier': 'error',
      'no-console': 'error',
      'react/react-in-jsx-scope': 0,
      'react/jsx-props-no-spreading': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/forbid-prop-types': 'off',
      'react/prop-types': 'off',
      'no-unsafe-optional-chaining': 'warn',
      'import/no-import-module-exports': 'off',
      'react/function-component-definition': 'off',
      'react/jsx-filename-extension': 'off',
      'import/prefer-default-export': 'warn',
      'react/require-default-props': 'off',
      'object-curly-newline': 'off',
      'no-undef': 0,
      'import/no-unresolved': 0,
    },
  },
);
