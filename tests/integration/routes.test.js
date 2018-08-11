const request = require('supertest');

describe('POST /api/v1', () => {

  let server, params;
  beforeEach(async () => {
    server = require('../../app');
    params =  {
      name: 'My Name',
      email: 'my@email.com',
      subject: 'Test Subject',
      text: 'Test Text'
    };
  });

  afterEach(() => {
    server.close();
  });

  it('should respond 400 if given invalid params', async () => {
    const requiredParams = ['name', 'email', 'subject', 'text'];
    for (const param of requiredParams) {
      const tmp = params[param];
      params[param] = '';
      const res = await request(server).post('/api/v1').send(params);
      expect(res.status).toBe(400);
      params[param] = tmp;
    }
  });

  it('should give a response code of 200', async () => {
    const res = await request(server).post('/api/v1').send(params);
    expect(res.status).toBe(200);
  });
});