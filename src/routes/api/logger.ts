import { log } from 'console';
import express, { Request, Response } from 'express';

const logger = (req: Request, res: Response, next: Function): void => {
  const url = req.url;
  console.log(`The visit URL: ${url}`);
  next();
};

export default logger;
