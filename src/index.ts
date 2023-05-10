import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import routes from './routes/index';
import logger from './routes/api/logger';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '../assets')));
// Example of import and use the routes module as middleware
app.use('/', routes);

const port = process.env.PORT;
const add5 = (value: number) => value + 5;

const myMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const { text } = req.params;
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
