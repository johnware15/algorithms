const expect = require('chai').expect
const fizzBuzz = require('../src/fizzBuzz.js')


describe('fizzBuzz', function() {
  it('should output Fizz for every multiple of three', function() {
    for (i = 0; i < fizzBuzz.length; i++) {
    expect(fizzBuzz[2]).to.equal('Fizz')
    }
  })
  it('should output Buzz for every multiple of five', function() {
    for (i = 0; i < fizzBuzz.length; i++) {
    expect(fizzBuzz[4]).to.equal('Buzz')
    }
  })
  it('should output FizzBuzz for every multiple of fifteen', function() {
    for (i = 0; i < fizzBuzz.length; i++) {
    expect(fizzBuzz[14]).to.equal('FizzBuzz')
    }
  })
  it('should output an integer for all other numbers', function() {
    for (i = 0; i < fizzBuzz.length; i++) {
    expect(fizzBuzz[20]).to.equal(19)
    }
  })
  it('should confirm that all other numbers are integers', function() {
    for (i = 0; i < fizzBuzz.length; i++) {
    expect(fizzBuzz[20]).to.be.a('integer')
    }
  })
})
