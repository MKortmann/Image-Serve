import express from 'express';
import { getThumbnail } from './api/getThumbnail';
import { getImage } from './api/getImage';

const routes = express.Router();

routes.get('/images', getThumbnail);
routes.get('/:filename', getImage);

export default routes;
