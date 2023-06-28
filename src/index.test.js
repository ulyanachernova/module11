const ReverseStr = require('./index.js');

test('reverse string', () => {
    const result = ReverseStr('drowing')
    expect(result).toBe('gniword')
});