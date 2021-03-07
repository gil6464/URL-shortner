// const { request } = require('express');
const request = require('supertest');
const app = require('./app');

describe('Checking app get', () => {
 it('should redirect',async () => {
    const expectResponse = {
        originalUrl:"https://www.github.com/",
        shortUrl:5,
    }
    const response = await request(app).post('/api/shorturl/new')
    .send({url: "https://www.github.com/"}).type("form");
    expect(response.status).toBe(200)
    expect(response.body).toEqual(expectResponse)
 })
})