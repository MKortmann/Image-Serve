import { Request, Response } from 'express';

const express = require('express');
const app = express();

export const add5 = (value: number) => {
  return value + 5;
};

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
