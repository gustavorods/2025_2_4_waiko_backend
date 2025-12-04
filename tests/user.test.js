const request = require('supertest');
require('dotenv').config();
const app = require('../server'); // imports the Express app from server.js

describe('API routes tests', () => {
  
  it('GET /api/users-data should return status 200', async () => {
    const response = await request(app).get('/api/users-data').set('x-api-key', process.env.AUTH_KEY);;
    expect(response.statusCode).toBe(200);

  });

});
