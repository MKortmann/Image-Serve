import express from 'express';
import request from 'supertest';
import path from 'path';
import { getImage } from '../routes/api/getImage';
import { Server } from 'http';

const app = express();

app.get('/images', getImage);

describe('test the getImage middleware', () => {
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
  it('should return a 200 status if it exist', async () => {
    const response = await request(app).get(
      '/images?filename=encenadaport&width=200&height=200'
    );
    expect(response.status).toEqual(200);
    expect(response.type).toEqual('image/jpeg');
  });

  it('should return a 404 error if file does not exist', async () => {
    const response = await request(app).get(
      '/images?filename=encenadaportX&width=200&height=200'
    );
    expect(response.status).toEqual(404);
  });

  it('should return a 400 error if width parameter is missing', async () => {
    const response = await request(app).get(
      '/images?filename=encenadaport&width=&height=200'
    );
    expect(response.status).toEqual(400);
  });

  it('should return a 400 error if height parameter is missing', async () => {
    const response = await request(app).get(
      '/images?filename=encenadaport&width=&height='
    );
    expect(response.status).toEqual(400);
  });
});
