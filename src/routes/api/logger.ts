import { Request, Response, NextFunction } from 'express';

const logger = (req: Request, res: Response, next: NextFunction): void => {
  const { url } = req;
  console.log(`The visit URL: ${url}`);
  next();
};

export default logger;
