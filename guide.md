#Guide to create Typescript project

Create package.json:

````npm init -y

Install express and dotenv:
```npm i express dotenv

Create a .env file in the root of the project and add the following content:
PORT=3000

Create a src directory and an index.js file inside it with the following code:
// src/index.js
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
res.send('Express + TypeScript Server');
});

app.listen(port, () => {
console.log([server]: Server is running at http://localhost:${port});
});

Run the server:
```node src/index.js

Install TypeScript and type definitions:
```npm i -D typescript @types/express @types/node

Generate a tsconfig.json file:
```npx tsc --init

Update the tsconfig.json to set the outDir:
{
"compilerOptions": {
...
"outDir": "./dist"
...
}
}

Create an Express server with a .ts extension:
// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
res.send("Express + TypeScript Server");
});

app.listen(port, () => {
console.log([server]: Server is running at http://localhost:${port});
});

Running TypeScript in Node with ts-node:
npx ts-node src/index.ts

Install nodemon:
```npm i -D nodemon

Install concurrently:
```npm i -D concurrently

Update package.json scripts:
{
"scripts": {
"build": "npx tsc",
"start": "node dist/index.js",
"dev": "nodemon src/index.ts"
}
}

Run the development server:
npm run dev

create a nodemon.json configuration file:
{
"watch": ["src"],
"ext": "ts",
"exec": "concurrently \"npx tsc --watch\" \"ts-node src/index.ts\""
}

Build the project:
```npm run build"
````
