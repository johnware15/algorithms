const expect = require('chai').expect
const makeChange = require('../src/makeChange.js')

describe('makeChange', function() {
  it('should be an function', function() {
    expect(makeChange).to.be.a('function')
  })
  it('returns an object with keys of (quarters, dimes, nickels, pennies)', function() {
    const changeObject = makeChange({price: 100, amountGiven: 100})
    expect(changeObject).to.be.an('object')
    expect(changeObject).to.have.keys('quarters', 'dimes', 'nickels', 'pennies')
    expect(changeObject).to.deep.equal({
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    })
  })

describe('makeChange', function() {
  it('should output correct change', function() {
      expect(makeChange({price: 100, amountGiven: 141})).to.deep.equal({
        quarters: 1,
        dimes: 1,
        nickels: 1,
        pennies: 1
      })
    })
  })
})
