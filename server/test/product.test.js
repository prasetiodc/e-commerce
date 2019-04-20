const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app')

chai.should()
chai.use(chaiHttp);

describe('Product', function() {
    let id = null
    describe('GET / ', function() {
        it('should return a array of object product', function(done) {
            chai
            .request(app)
            .get('/products')
            .end(function(err, res) {
                res.body.should.be.a('array');

                for(let i=0; i<res.body.length; i++){
                    res.body[i].should.have.property('name');
                    res.body[i].name.should.be.a('string');
                    res.body[i].should.have.property('image');
                    res.body[i].image.should.be.a('string');
                    res.body[i].should.have.property('price');
                    res.body[i].price.should.be.a('number');
                    res.body[i].should.have.property('stock');
                    res.body[i].stock.should.be.a('number');
                }

                done();                
            });
        });
    })

    describe('POST / ', function() {
        it('should return a new object product', function(done) {
            let newData ={ 
                name: 'roti', 
                image: 'www.asdasdasd.com', 
                price: 5000,
                stock: 5 
            }
            chai
            .request(app)
            .post('/products') //endpoint
            .send(newData) 
            .end(function(err, res) {
                id = res.body._id
                res.body.should.be.a('object');
                res.body.should.have.property('name');
                res.body.name.should.be.a('string');
                res.body.name.should.equal(newData.name);
                res.body.should.have.property('image');
                res.body.image.should.be.a('string');
                res.body.image.should.equal(newData.image);
                res.body.should.have.property('price');
                res.body.price.should.be.a('number');
                res.body.price.should.equal(newData.price);
                res.body.should.have.property('stock');
                res.body.stock.should.be.a('number');
                res.body.stock.should.equal(newData.stock);
                done();                               // <= Call done to signal callback end
            });
        });
    })

    describe('GET /:id ', function() {
        it('should return a object product', function(done) {
            chai
            .request(app)
            .get(`/products/${id}`)
            .end(function(err, res) {
                res.body.should.be.a('object');
                res.body.should.have.property('name');
                res.body.name.should.be.a('string');
                res.body.should.have.property('image');
                res.body.image.should.be.a('string');
                res.body.should.have.property('price');
                res.body.price.should.be.a('number');
                res.body.should.have.property('stock');
                res.body.stock.should.be.a('number');
                done();
            });
        });
    })

    describe('PUT /:id ', function() {
        it('should return a new object product after update', function(done) {
            let newData ={ 
                name: 'roti coklat', 
                price: 5000,
                stock: 4 
            }
            chai
            .request(app)
            .put(`/products/${id}`)
            .send(newData) 
            .end(function(err, res) {
                // should.not.exist(err)
                res.body.should.be.a('object');
                res.body.should.have.property('name');
                res.body.name.should.be.a('string');
                res.body.name.should.equal(newData.name);
                res.body.should.have.property('image');
                res.body.image.should.be.a('string');
                res.body.image.should.equal(newData.image);
                res.body.should.have.property('price');
                res.body.price.should.be.a('number');
                res.body.price.should.equal(newData.price);
                res.body.should.have.property('stock');
                res.body.stock.should.be.a('number');
                res.body.stock.should.equal(newData.stock);
                done();                               
            });
        });
    });

    describe('DELETE /:id ', function() {
        it('should return string "Delete Success"', function(done) {
            chai
            .request(app)
            .delete(`/products/${id}`)
            .end(function(err, res) {
                res.body.should.equal("Delete Success");
                done();                        // <= Call done to signal callback end
            });
        });
    });

});


