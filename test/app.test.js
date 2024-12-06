const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);

const appUrl = 'http://localhost:3000';

describe('Simple App Tests', () => {
    it('should return Hello, World! on /', (done) => {
        chai.request(appUrl)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Hello, World!');
                done();
            });
    });

    it('should return a JSON response on /api', (done) => {
        chai.request(appUrl)
            .get('/api')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.deep.equal({ message: 'Welcome to the API!' });
                done();
            });
    });
});
