const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app')

chai.should()
chai.use(chaiHttp);

describe('Cart', function() {
    let id = null
    describe('POST / ', function() {
        it('should return a new object cart', function(done) {
            let newData = {
                userId: '5cb9948f437e151d62145c35', 
                productId: '5cbb4ca893ca7b0a17a0decd',
                quantity: 3,
            }
        chai
            .request(app)
            .post('/cart') //endpoint
            .set('auth','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2I5OTQ4ZjQzN2UxNTFkNjIxNDVjMzUiLCJuYW1lIjoicHJhc2V0aW8iLCJlbWFpbCI6InRpb0BnbWFpbC5jb20iLCJpYXQiOjE1NTU4NDcwNzB9.UI4vOe7LdboiC56KD4p1N8WOP8gDWhq9yW5G-8mQFD0')
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
                res.body.should.have.property('totalPrice');
                res.body.totalPrice.should.be.a('number');
                res.body.should.have.property('status');
                res.body.status.should.be.a('boolean');
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


