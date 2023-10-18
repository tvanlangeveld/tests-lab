const {returnTwo, greeting, add} = require('./function')


test('This should return two', () =>{
 expect(returnTwo()).toBe(2)
})

test('Excepts to return hello James', () => {
  expect(greeting('James')).toEqual('hello, James.')
})

test('Just return the total of num1 and num2', () => {
  expect(add(1, 2)).toEqual(3)
})
