const request = require('supertest');
const config = require('config');

const root = config.get('root');

jest.mock('../../utils/sendMail');
jest.mock('../../utils/logger');

describe('routes', () => {
  let server;

  beforeAll(() => {
    server = require('../../app');
  });

  afterAll(() => {
    server.close();
  });

  describe(`GET ${root}/healthcheck`, () => {
    it('should have a status code of 200', async () => {
      const res = await request(server).get(`${root}/healthcheck`);
      expect(res.status).toBe(200);
    });
  });

  describe(`POST ${root}`, () => {
    let params;
  
    beforeEach(() => {
      params =  {
        name: 'My Name',
        email: 'my@email.com',
        subject: 'Test Subject',
        text: 'Test Text'
      };
    });
  
    it('should have a status code of 400 if given invalid params', async () => {
      const requiredParams = ['name', 'email', 'subject', 'text'];
      for (const param of requiredParams) {
        const tmp = params[param];
        params[param] = '';
        const res = await request(server).post(`${root}`).send(params);
        expect(res.status).toBe(400);
        params[param] = tmp;
      }
    });
  
    it('should have a status code of 200 if given valid params', async () => {
      const res = await request(server).post(`${root}`).send(params);
      expect(res.status).toBe(200);
    });
  });
});



