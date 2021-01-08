# Gatsby Contentful Template Docs

First of all thank you for buying this template created by [Devscriptive](https://devscriptive.com);

## Getting started

This starter is using Gatsby and Contentful for the cms part.

- If you are new to contentful we recommend reading this article [Contentful getting started guide](https://www.contentful.com/developers/docs/tutorials/general/get-started/).
- If you are new to gatsby we recommend the docs [Gatsby.js Docs](https://www.gatsbyjs.org/)

### 1. Get the source code and install dependencies.

```
$ npm install
```

### 2. Go to [http://contentful.com/](http://contentful.com/) and create a space

### 3. Set up of the needed content model and create a configuration file

This project comes with a Contentful setup command `npm run setup`.

This command will ask you for a space ID, and access tokens for the Contentful Management and Delivery API(Go to your space > Settings > Api Keys) and then import the needed content model into the space you define and write a config file (`./.contentful.json`).

`npm run setup` automates that for you but if you want to do it yourself rename `.contentful.json.sample` to `.contentful.json` and add your configuration in this file.

## Crucial Commands

### `npm run dev`

Run the project locally with live reload in development mode.

### `npm run build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

### `npm run serve`

Spin up a production-ready server with your blog. Don't forget to build your page beforehand.

## Deployment

Since this is a static website it can easily be deployed to most providers (netlify, firebase storage, aws s3, vercel etc)

[Deploy with Netlify](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/)

See the [official Contentful getting started guide](https://www.contentful.com/developers/docs/tutorials/general/get-started/).

## Contact

If you need a specific feature contact us at devscriptive@gmail.com or [here](https://devscriptive.com/contact)
