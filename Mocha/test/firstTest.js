var assert = require('chai').assert;
var first = require('../first');

describe('First.js', function () {
    describe('Hello Tests', function () {
        it('Hello should return Hello World', function (done) {
            assert.equal(first.hello(), "Hello World")
            done()
        });
    }),
        describe('second Test', function () {
            it('Second should add 5 to 5 and return 10', function (done) {

                assert.equal(first.second(5), 10)
                
                done()
            })
        })
})


