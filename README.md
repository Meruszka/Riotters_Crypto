[![Netlify Status](https://api.netlify.com/api/v1/badges/aec89a69-f394-408d-84d8-b52d5d0d1261/deploy-status)](https://app.netlify.com/sites/cryptocharts200609/deploys)


# Setup

- set environment variables
- install dependencies
- run the app

## Environment variables

- NODE_ENV=development <= to fetch data from local json files
- VITE_API_KEY=YOUR API KEY <= to fetch data from the api
  (see `src/api/cryptoApi.js`) set the api key

```bash
$ npm install
$ npm run dev
```

## Dependencies

- [axios](https://ghub.io/axios): Promise based HTTP client for the browser and node.js
- [chart.js](https://ghub.io/chart.js): Simple HTML5 charts using the canvas element
- [vite](https://ghub.io/vite): Next generation frontend tooling. It's fast!
- [vue](https://github.com/vuejs/core): Reactive, component-oriented view layer for modern web interfaces.
- [tailwind](https://ghub.io/tailwind): A utility-first CSS framework for rapidly building custom designs.

