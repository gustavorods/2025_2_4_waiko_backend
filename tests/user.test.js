const request = require('supertest');
const app = require('../server'); // imports the Express app from server.js

describe('API routes tests', () => {
  
  it('GET /api/users-data should return status 200', async () => {
    const response = await request(app).get('/api/users-data');
    expect(response.statusCode).toBe(200);

  });

});
