const request = require('supertest');

const server = require('./server.js');
//runs an instance of server in memory to run tests, the server does not need to be running

describe('server.js', () => {
    describe('GET /', () => {
        it('returns status 200', () => {
            //make get req to / endpoint on the server
            return request(server)
            //when testing something async, return the call to serve, else you'll get a false positive
                .get('/')
                .then(res => {
                    expect(res.status).toBe(200);
            })
            //assert that we get an http status code 200
        });

        it("should return { api: 'up' }", async () => {
            const res = await request(server).get('/');

            expect(res.body.api).toBe('up');
        });

        it('returns JSON', done => {
            request(server)
                .get('/')
                .then(res => {
                    //use regex
                    expect(res.type).toMatch(/json/i);
                    done();
                });
        });
    });
});