const index = require('index')

describe('index', () => {
  it(`returns { hello: 'world' }`, () => {
    let result = index()
    expect(result).toEqual({ hello: 'world' })
  })
})