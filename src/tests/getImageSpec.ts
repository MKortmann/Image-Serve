import express from 'express';
import request from 'supertest';
import path from 'path';
import { Server } from 'http';
import getImage from '../routes/api/getImage';

const app = express();

app.get('/:filename', getImage);

describe('test the getUnmodifyImage middleware', () => {
  let server: Server;
  const PORT = 5000;

  beforeAll(() => {
    server = app.listen(PORT, (): void => {
      console.log(`Test server on port ${PORT}`);
    });
  });

  afterAll((done) => {
    server.close(done);
  });
  it('should return a JPEG image file', async () => {
    const response = await request(app).get('/fjord');
    expect(response.status).toEqual(200);
    expect(response.type).toEqual('image/jpeg');
  });
  it('should return a 404 error if file does not exist', async () => {
    const imagePath = path.join(__dirname, '../../assets/images/fjordX.jpg');
    const response = await request(app).get(imagePath);
    expect(response.status).toEqual(404);
  });
});
