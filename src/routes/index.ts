import express, { Request, Response } from 'express';

const routes = express.Router();

routes.get('/', (req: Request, res: Response): void => {
  res.send('root!');
});

routes.get('/images/:filename', (req, res) => {
  const filename = req.params.filename;
  console.log(filename);
  res.sendFile(filename);
});

export default routes;
