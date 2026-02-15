# AGENTS.md

This is a Module Federation 2.0 project built with Svelte, using Bun as the package manager and TypeScript as the language.

You are an expert in JavaScript, TypeScript, Svelte, Rsbuild, and web application development. You write maintainable, performant, and accessible code.

## Code Style

### TypeScript Functions

- Use `const` to create functions instead of the `function` keyword
- Example: `const myFunction = (param: string): void => { ... }` instead of `function myFunction(param: string): void { ... }`
- Always add JSDoc comments when creating a new function to document its purpose, parameters, and return value
- Example:
  ```typescript
  /**
   * Calculates the sum of two numbers
   * @param a - The first number
   * @param b - The second number
   * @returns The sum of a and b
   */
  const add = (a: number, b: number): number => {
    return a + b;
  };
  ```

## Commands

- `bun run dev` - Start the dev server
- `bun run build` - Build the app for production
- `bun run preview` - Preview the production build locally

## Docs

- Rsbuild: https://rsbuild.rs/llms.txt
- Rspack: https://rspack.rs/llms.txt

## Tools

### Biome

- Run `bun run lint` to lint your code
- Run `bun run format` to format your code
