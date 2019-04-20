const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app')

chai.should()
chai.use(chaiHttp);

describe('User', function() {
    let id = null
    // describe('GET / ', function() {
    //     it('should return a array of object product', function(done) {
    //         chai
    //         .request(app)
    //         .get('/products')
    //         .end(function(err, res) {
    //             res.body.should.be.a('array');

    //             for(let i=0; i<res.body.length; i++){
    //                 res.body[i].should.have.property('name');
    //                 res.body[i].name.should.be.a('string');
    //                 res.body[i].should.have.property('price');
    //                 res.body[i].price.should.be.a('number');
    //                 res.body[i].should.have.property('stock');
    //                 res.body[i].stock.should.be.a('number');
    //             }

    //             done();                
    //         });
    //     });
    // })

    describe('POST / ', function() {
        it('should return a new object product', function(done) {
            let newData ={ 
                name: 'saya', 
                email: 'saya@email.com',
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

    

    // describe('PUT /:id ', function() {
    //     it('should return a new object product after update', function(done) {
    //         let newData ={ 
    //             name: 'roti coklat', 
    //             price: 5000,
    //             stock: 4 
    //         }
    //         chai
    //         .request(app)
    //         .put(`/products/${id}`)
    //         .send(newData) 
    //         .end(function(err, res) {
    //             // should.not.exist(err)
    //             res.body.should.be.a('object');
    //             res.body.should.have.property('name');
    //             res.body.name.should.be.a('string');
    //             res.body.name.should.equal(newData.name)
    //             res.body.should.have.property('price');
    //             res.body.price.should.be.a('number');
    //             res.body.price.should.equal(newData.price);
    //             res.body.should.have.property('stock');
    //             res.body.stock.should.be.a('number');
    //             res.body.stock.should.equal(newData.stock);
    //             done();                               
    //         });
    //     });
    // }); 

    // describe('DELETE /:id ', function() {
    //     it('should return string "Delete Success"', function(done) {
    //         chai
    //         .request(app)
    //         .delete(`/products/${id}`)
    //         .end(function(err, res) {
    //             res.body.should.equal("Delete Success");
    //             done();                        // <= Call done to signal callback end
    //         });
    //     });
    // });

});


