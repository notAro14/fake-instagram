# Webpack boilerplate for React

Use Webpack 5 to kick off your SPA React projects

## Pre requisites:

- node
- yarn

## Install

```bash
yarn
```

## Run development

```bash
yarn start
```

## Build

```bash
yarn build
```

## Serve production build

```bash
yarn build && yarn serve
```

## Format (Prettier)

```bash
yarn format
```

## Lint (Eslint)

```bash
yarn lint
```

## Deploy

### Without a server

Deploy the static files in `dist/` folder at your prefered static hosting service (netlify, github pages, vercel, etc...).

You just have to specify the build command which is `yarn build`

### With a server

Serve the files with Node. Refer to the `src/server/server.js` file. You can deploy to heroku.
