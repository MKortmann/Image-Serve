import express, { Request, Response } from 'express';
import routes from './routes/index';
import logger from './routes/api/logger';
require('dotenv').config();

const app = express();
const port = process.env.PORT;

const path = require('path');

const add5 = (value: number) => value + 5;

// Example of import and use the routes module as middleware
app.use('/', routes);

const myMiddleware = (req: Request, res: Response, next: Function): void => {
  const text = req.params.text;
  console.log(text);
  res.locals.text = text;
  next();
};

app.get('/api/:text', myMiddleware, logger, (req: Request, res: Response): void => {
  res.send(`Hello, World: ${res.locals.text}`);
});

app.listen(port, (): void => {
  console.log(`Server started on port: ${port}`);
});

export default add5;
