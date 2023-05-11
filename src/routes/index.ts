import express from 'express';
import { getImage } from './api/getImage';
import { getUnmodifyImage } from './api/getUnmodifyImage';

const routes = express.Router();

routes.get('/images', getImage);
routes.get('/:filename', getUnmodifyImage);

export default routes;
