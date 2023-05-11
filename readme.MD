# Image Processing Placeholder API

This image processing placeholder API allows you to get thumbnails from your images with fully and freely specified size (width and height) by you.

## Goal

Develop a simple placeholder API that enables you to insert thumbnails into your frontend with the size specified via URL parameters. It also functions as a library that serves properly scaled versions of your images/thumbnails to the frontend, reducing the page load size.

## Features

- Returns images.
- Returns thumbnails (resized images).
- Stores the resized image for the next request, saving processing and speed time.

## Technlogies

To accomplish this project, we are using the following technologies:

- Node.js
- Express
- Typescript
- eslint
- prettier
- jasmine & supertest
- sharp
- dotenv
- cors

## How to install & start the server

Clone the repository

```
npm install
npm run build
npm run start
```

## Getting Images

Open the browser and type the address below, followed by any image name that you want to fetch in the "images" folder.

```
http://localhost:3000/encenadaport
```

## Getting Thumbnails

Open the browser and type the address below, followed by the image name, width, and height.

```
http://localhost:3000/images?filename=encenadaport&width=200&height=200
```

### Getting the index.html

This is just an extra. If you want to load the index.html file with some explanations, open the browser and type the following address:

```
http://localhost:3000/
```

## Contributions

The Image API Server was completed by me.
