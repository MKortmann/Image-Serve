import express, { Request, Response } from 'express';
import path from 'path';

const routes = express.Router();

routes.get('/', (req: Request, res: Response): void => {
  res.send('root!');
});

routes.get('/images/:filename', (req, res) => {
  const { filename } = req.params;
  console.log(filename);
  console.log(__dirname);
  const imagePath = path.join(__dirname, '../../assets/images/', filename + '.jpg');
  res.sendFile(imagePath);
});

export default routes;
