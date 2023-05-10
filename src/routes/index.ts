import express, { Request, Response } from 'express';
import path from 'path';
import sharp from 'sharp';

const routes = express.Router();

routes.get('/', (req: Request, res: Response): void => {
  res.send('root!');
});

routes.get('/images', async (req, res) => {
  const { filename, width, height } = req.query;
  console.log(filename);
  console.log(width);
  console.log(height);
  const imagePath = path.join(__dirname, '../../assets/images/', filename + '.jpg');
  const thumbPath = path.join(__dirname, '../../assets/thumbs/', filename + '.jpg');

  try {
    await sharp(imagePath)
      .resize(parseInt(width as string), parseInt(height as string))
      .toFile(thumbPath);

    res.setHeader('Content-Type', 'image/jpeg');
    res.sendFile(thumbPath);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

export default routes;
