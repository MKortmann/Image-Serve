import { Request, Response, NextFunction } from 'express';
import sharp from 'sharp';

const logger = (req: Request, res: Response, next: NextFunction): void => {
  const { url } = req;
  console.log(`The visit URL: ${url}`);
  next();
};

export default logger;
