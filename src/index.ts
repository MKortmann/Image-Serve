import express, { Request, Response } from 'express';

const app = express();

const add5 = (value: number) => value + 5;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

export default add5;
