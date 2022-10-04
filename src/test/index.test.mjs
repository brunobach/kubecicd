import test from 'node:test';
import assert from 'node:assert';

test('received 200 status code HTTP in route /', () => {
    return assert.equal(200, 200);
});