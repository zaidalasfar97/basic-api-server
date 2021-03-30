'use strict';

const { app } = require('./../src/server');
const superTest = require('supertest');
const request = superTest(app);
let id;

describe('testing the clothes api server', () => {
    it('should create a new Clothes on POST /clothes', async () => {
        const response = await request.post('/api/clothes').send({
            name: 'pants',
        });
        expect(response.status).toEqual(201);
        expect(response.body.data.name).toEqual('pants');
        id = response.body.id;
    });

    it('should get all the Clothes on GET /clothes', async () => {
        const response = await request.get('/api/clothes');
        expect(response.status).toEqual(200);
    });

    it('should get a specific piece of Clothes on GET /clothes/:id', async () => {
        const response = await request.get(`/api/clothes/${id}`);
        expect(response.status).toEqual(200);
    });

    it('should update a specific piece of Clothes on PUT /clothes/:id', async () => {
        const response = await request.put(`/api/clothes/${id}`).send({
            name: 't-shirt',
        });
        expect(response.status).toEqual(200);
        expect(response.body.data.name).toEqual('t-shirt');
    });

    it('should delete a specific piece of Clothes on DELETE /clothes/:id', async () => {
        const response = await request.delete(`/api/clothes/${id}`);
        expect(response.status).toEqual(200);
    });

    it('handle invalid routes', async () => {
        const response = await request.get(`/foo`);
        expect(response.status).toEqual(404);
    });

    it('handle invalid method', async () => {
        const response = await request.delete('/clothes');
        expect(response.status).toEqual(404);
    });

    it('handle server errors', async () => {
        const response = await request.put('/bad');
        expect(response.status).toEqual(500);
    });
});

describe('testing the food api server', () => {
    it('should create a new Food on POST /food', async () => {
        const response = await request.post('/api/food').send({
            name: 'pants',
        });
        expect(response.status).toEqual(201);
        expect(response.body.data.name).toEqual('pants');
        id = response.body.id;
    });

    it('should get all the Food on GET /food', async () => {
        const response = await request.get('/api/food');
        expect(response.status).toEqual(200);
    });

    it('should get a specific piece of Food on GET /food/:id', async () => {
        const response = await request.get(`/api/food/${id}`);
        expect(response.status).toEqual(200);
    });

    it('should update a specific piece of Food on PUT /food/:id', async () => {
        const response = await request.put(`/api/food/${id}`).send({
            name: 't-shirt',
        });
        expect(response.status).toEqual(200);
        expect(response.body.data.name).toEqual('t-shirt');
    });

    it('should delete a specific piece of Food on DELETE /food/:id', async () => {
        const response = await request.delete(`/api/food/${id}`);
        expect(response.status).toEqual(200);
    });

    it('handle invalid routes', async () => {
        const response = await request.get(`/foo`);
        expect(response.status).toEqual(404);
    });

    it('handle invalid method', async () => {
        const response = await request.delete('/food');
        expect(response.status).toEqual(404);
    });

    it('handle server errors', async () => {
        const response = await request.put('/bad');
        expect(response.status).toEqual(500);
    });
});