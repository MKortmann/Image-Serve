import { Request, Response } from 'express';
import path from 'path';

export async function getUnmodifyImage(req: Request, res: Response): Promise<void> {
  const { filename } = req.params;
  const imagePath = path.join(__dirname, '../../../assets/images/', filename + '.jpg');
  res.sendFile(imagePath);
}
