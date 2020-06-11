This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

https://nextjs.org/docs/getting-started

```bash
npx create-next-app my-app
```

## Set TypeScript

https://nextjs.org/docs/basic-features/typescript

```bash
touch tsconfig.json

yarn add --dev typescript @types/react @types/node
```

## Set Prettier

https://prettier.io/

```bash
yarn add prettier --dev --exact
```

### Pre-commit Hook

https://prettier.io/docs/en/precommit.html

```bash
npx mrm lint-staged
```

### Integrating with ESLint

#### ESLint

```bash
npx eslint --init
```

https://prettier.io/docs/en/integrating-with-linters.html

```bash
yarn add --dev eslint-config-prettier eslint-plugin-prettier

```

Then in .eslintrc.json:

```
{
  "extends": ["plugin:prettier/recommended"]
}
```
## Meterial-UI with typescript
https://material-ui.com/
https://github.com/mui-org/material-ui/tree/master/examples/nextjs-with-typescript
```bash
yarn add @material-ui/core @material-ui/icons
```
## Express
```bash
yarn add express

yarn add --dev @types/express ts-node
```

## Dotenv
```bash
yarn add dotenv

yarn add --dev @types/dotenv
```

## Run the development server

```bash
npm run dev
# or
yarn dev
```
