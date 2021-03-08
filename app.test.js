const request = require('supertest');
const app = require('./app');

describe('Checking app post', () => {
    it('Should response back the adress with id',async () => {
        const expectResponse = {
        originalUrl:"https://www.github.com/",
        shortUrl:5,
        }
        const response = await request(app).post('/api/shorturl/new')
        .send({url: "https://www.github.com/"}).type("form");
        expect(response.status).toBe(200)
        expect(response.body).toEqual(expectResponse)
 });
    it('Should be same id for the same adress', async () => {
        const firstResponse = await request(app).post('/api/shorturl/new')
        .send({url: "https://www.google.com/"}).type("form");
        const secondResponse = await request(app).post('/api/shorturl/new')
        .send({url: "https://www.google.com/"}).type("form");
        expect(firstResponse.body).toEqual(secondResponse.body);
    });
    it('should reject',async () => {
        const response = await request(app).post('/api/shorturl/new')
        .send({url: "https://www.GilNaaman.com/"}).type("form");
        expect(response.status).toBe(404)
    })
})
describe('Check app redirect', () => {
    it('should redirect for valid id address', async () => {
        const response = await request(app).get('/api/shorturl/5');
        expect(response.status).toBe(302);
        expect(response.headers.location).toBe('https://www.github.com/')
    })
    it('shouldnt redirect to unvalid id', async () => {
        const response = await request(app).get('/api/shorturl/A');
        expect(response.status).toBe(404);
    })
})
describe('Check if app increase count after redirect', () => {
    it('should add one to count', async () => {
        const getFirstStatistic = await request(app).get('/api/statistic/1');
        const sendRequest = await request(app).get('/api/shorturl/1');
        setTimeout(async () => {
        const getSecondStatistic = await request(app).get('/api/statistic/1');
        expect(getFirstStatistic.body.redirectCount + 1).toEqual(getSecondStatistic.body.redirectCount)
       },2000);
    })
})