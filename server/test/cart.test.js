const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app')

chai.should()
chai.use(chaiHttp);

describe('Cart', function() {
    let id = null

    describe('POST / ', function() {
        it('should return a new object cart', function(done) {
            let newData ={ 
                userId: '1', 
                productId: '1',
                quantity: 3
            }
            chai
            .request(app)
            .post('/cart') //endpoint
            .send(newData) 
            .end(function(err, res) {                
                res.body.should.be.a('object');
                id = res.body._id
                res.body.should.have.property('userId');
                res.body.userId.should.be.a('string');
                res.body.userId.should.equal(newData.userId)
                res.body.should.have.property('productId');
                res.body.productId.should.be.a('string');
                res.body.productId.should.equal(newData.productId);
                res.body.should.have.property('quantity');
                res.body.quantity.should.be.a('number');
                res.body.quantity.should.equal(newData.quantity);
                done();                               // <= Call done to signal callback end
            });
        });
    })

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


