const { TestScheduler } = require('jest');
const sum = require('./src/js/sum');

test("adds 1 + 2 equal 3", () => {
    expect(sum(1,2)).toBe(3);
})