import { Request, Response } from 'express';
import path from 'path';

async function getImage(req: Request, res: Response): Promise<void> {
  const { filename } = req.params;
  const imagePath = path.join(__dirname, '../../../assets/images/', `${filename}.jpg`);

  console.log(imagePath);

  res.setHeader('Content-Type', 'image/jpeg');
  res.status(200);
  res.sendFile(imagePath);
}

export default getImage;
