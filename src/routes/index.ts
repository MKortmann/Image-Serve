import express from 'express';
import { getImage } from './api/getImage';
import { getUnmodifyImage } from './api/getUnmodifyImage';

const routes = express.Router();

routes.get('/:filename', getUnmodifyImage);

routes.get('/images', getImage);

export default routes;
