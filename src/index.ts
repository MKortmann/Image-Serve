import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

const add5 = (value: number) => value + 5;

const myMiddleware = (req: Request, res: Response, next: () => void) => {
  const text = req.params.text;
  console.log(text);
  res.locals.text = text;
  next();
};

app.get('/api/:text', myMiddleware, (req: Request, res: Response) => {
  res.send(`Hello, World: ${res.locals.text}`);
});

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});

export default add5;
