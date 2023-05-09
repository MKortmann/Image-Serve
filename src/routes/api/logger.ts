import { Request, NextFunction } from 'express';

const logger = (req: Request, next: NextFunction): void => {
  const { url } = req;
  console.log(`The visit URL: ${url}`);
  next();
};

export default logger;
