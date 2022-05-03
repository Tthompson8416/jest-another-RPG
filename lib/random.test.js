const { test } = require('jest-circus');
const { default: expectationResultFactory } = require('jest-jasmine2/build/expectationResultFactory');
const checkIfEqual = require('../lib/random.js');

test('checks if 10 is equal to 10', () => {
    expectationResultFactory(checkIfEqual(10, 10)).toBe(true);
});