import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

const add5 = (value: number) => value + 5;

app.get('/api', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});

export default add5;
