import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('analytic fixture', () => {
  assert.ok(Math.abs(api.exponentialCdf(Math.log(2), 1) - 0.5) < 1e-12);
});
test('density origin', () => {
  assert.equal(api.exponentialPdf(0, 2), 2);
  assert.equal(api.exponentialPdf(-1, 2), 0);
});
test('negative support', () => {
  assert.equal(api.exponentialCdf(-1, 2), 0);
});
test('quantile inverse', () => {
  for (let i = 0; i < 100; i++) {
    const p = i / 100;
    assert.ok(Math.abs(api.exponentialCdf(api.exponentialQuantile(p, 3), 3) - p) < 1e-14);
  }
});
test('invalid rates and endpoint', () => {
  assert.throws(() => api.exponentialQuantile(1, 1));
  assert.throws(() => api.exponentialPdf(1, 0));
});
test('type contract', () => {
  assert.throws(() => api.exponentialCdf('1', 2));
});
