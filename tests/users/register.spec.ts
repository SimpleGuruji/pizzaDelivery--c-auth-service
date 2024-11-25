import request from 'supertest';
import app from '../../src/app';

describe('POST auth/register', () => {
  describe('Given all fields', () => {
    it('Should return 201 status code', async () => {
      const userData = {
        firstName: 'Rohit',
        lastName: 'Kumar',
        email: 'rohit123@gmail.com',
        password: 'rohit1234',
      };
      const response = await request(app).post('/auth/register').send(userData);

      expect(response.statusCode).toBe(201);
    });

    it('should return valid json response', async () => {
      const userData = {
        firstName: 'Rohit',
        lastName: 'Kumar',
        email: 'rohit123@gmail.com',
        password: 'rohit1234',
      };
      const response = await request(app).post('/auth/register').send(userData);

      expect(response.headers['content-type']).toEqual(
        expect.stringContaining('json')
      );
    });
  });
});
