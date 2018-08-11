const request = require('supertest');

jest.mock('../../utils/sendMail.js');

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

  it('should have a status code of 400 if given invalid params', async () => {
    const requiredParams = ['name', 'email', 'subject', 'text'];
    for (const param of requiredParams) {
      const tmp = params[param];
      params[param] = '';
      const res = await request(server).post('/api/v1').send(params);
      expect(res.status).toBe(400);
      params[param] = tmp;
    }
  });

  it('should have a status code of 200 if given valid params', async () => {
    const res = await request(server).post('/api/v1').send(params);
    expect(res.status).toBe(200);
  });
});