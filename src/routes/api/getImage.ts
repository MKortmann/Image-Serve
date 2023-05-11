import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

interface ImageRequestQuery {
  filename: string;
  width: string;
  height: string;
}

export async function getImage(req: Request, res: Response): Promise<void> {
  const { filename, width, height } = req.query as unknown as ImageRequestQuery;

  console.log(filename);
  const imagePath = path.join(__dirname, '../../../assets/images/', filename + '.jpg');

  if (!fs.existsSync(imagePath)) {
    res.status(404).send('Image Not Found');
    return;
  }

  if (width === '' || height === '') {
    res.status(400).send('Please, specify the height or width');
    return;
  }

  const thumbPath = path.join(
    __dirname,
    '../../../assets/thumbs/',
    filename + '-w' + width + '-h' + height + '.jpg'
  );

  if (fs.existsSync(thumbPath)) {
    res.setHeader('Content-Type', 'image/jpeg');
    res.sendFile(thumbPath);
    return;
  }

  try {
    await sharp(imagePath).resize(parseInt(width), parseInt(height)).toFile(thumbPath);

    res.setHeader('Content-Type', 'image/jpeg');
    res.status(200);
    res.sendFile(thumbPath);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Internal Server Error: ${err}`);
  }
}
