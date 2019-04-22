const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app')

chai.should()
chai.use(chaiHttp);

describe('User', function() {
    let id = null

    describe('POST / ', function() {
        it('should return a new object user', function(done) {
            let newData ={ 
                name: 'g', 
                email: 'g@email.com',
                password: 'password'
            }
            chai
            .request(app)
            .post('/users') //endpoint
            .send(newData) 
            .end(function(err, res) {
                id = res.body._id
                res.body.should.be.a('object');
                res.body.should.have.property('name');
                res.body.name.should.be.a('string');
                res.body.name.should.equal(newData.name)
                res.body.should.have.property('email');
                res.body.email.should.be.a('string');
                res.body.email.should.equal(newData.email);
                res.body.should.have.property('password');
                res.body.password.should.be.a('string');
                res.body.password.should.not.equal(newData.password);
                done();                               // <= Call done to signal callback end
            });
        });
    })

    describe('POST /login ', function() {
        it('should return a token', function(done) {
            let user ={ 
                email: 'saya@email.com',
                password: 'password'
            }
            chai
            .request(app)
            .post('/users/login') //endpoint
            // .set()
            .send(user)
            .end(function(err, res) {
                res.body.should.be.a('object');
                res.body.should.have.property('token');
                res.body.token.should.be.a('string');
                done();                               
            });
        });
    })

    describe('DELETE /:id ', function() {
        it('should return string "Delete Success"', function(done) {
            chai
            .request(app)
            .delete(`/users/${id}`)
            .end(function(err, res) {
                res.body.should.equal("Delete Success");
                done();                        // <= Call done to signal callback end
            });
        });
    });

});


