const request = require('supertest');

describe('POST /api/v1', () => {

  let server;
  beforeEach(async () => {
    const res = await require('../../app');
    server = res.server;
  });

  afterEach(() => {
    server.close();
  });

  it('should give a response code of 200', async () => {
    const res = await request(server).post('/api/v1');
    expect(res.status).toBe(200);
  });
});