const request = require ('supertest');
const app = require ('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async() => {
        await connection.destroy();
    });

    it('Should be able to create a new ONG', async () => {
        const resp = await request(app)
            .post('/ongs')
            .send({
                name: "NONG",
                email: "rogerio@email.com",
                whatsapp: "5588000000000",
                city: "Sobral",
                uf: "CE"
            });

        expect(resp.body).toHaveProperty('id');
        expect(resp.body.id).toHaveLength(8);
    });
});