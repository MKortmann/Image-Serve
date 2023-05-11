import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import generateThumbnail from '../utilities/sharp';

interface ImageRequestQuery {
  filename: string;
  width: string;
  height: string;
}

async function getThumbnail(req: Request, res: Response): Promise<void> {
  const { filename, width, height } = req.query as unknown as ImageRequestQuery;

  const imagePath = path.join(__dirname, '../../../assets/images/', `${filename}.jpg`);

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
    `${filename}-w${width}-h${height}.jpg`
  );

  if (fs.existsSync(thumbPath)) {
    res.setHeader('Content-Type', 'image/jpeg');
    res.sendFile(thumbPath);
    return;
  }

  try {
    await generateThumbnail(
      imagePath,
      parseInt(width, 10),
      parseInt(height, 10),
      thumbPath
    );

    res.setHeader('Content-Type', 'image/jpeg');
    res.status(200);
    res.sendFile(thumbPath);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Internal Server Error: ${err}`);
  }
}

export default getThumbnail;
