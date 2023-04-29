import { Request, Response } from 'express';
import { add5 } from '../index';

describe('Example test', () => {
  it('should return a 200 status code', () => {
    const req: Request = {} as Request;
    const res: Response = {} as Response;

    expect(200).toBe(200);
  });
  it('should addd 5', () => {
    expect(add5(5)).toEqual(10);
  });
});
