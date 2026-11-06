function finite(value: number, min = -Number.MAX_VALUE, max = Number.MAX_VALUE): number {
  if (typeof value !== 'number' || !Number.isFinite(value))
    throw new TypeError('Expected finite number');
  if (value < min || value > max) throw new RangeError('Number outside supported bounds');
  return value;
}
function rateCheck(rate: number): void {
  finite(rate, 1e-12, 1e12);
}
export function exponentialPdf(x: number, rate: number): number {
  rateCheck(rate);
  finite(x, -1e100, 1e100);
  return x < 0 ? 0 : rate * Math.exp(-rate * x);
}
export function exponentialCdf(x: number, rate: number): number {
  rateCheck(rate);
  finite(x, -1e100, 1e100);
  return x <= 0 ? 0 : -Math.expm1(-rate * x);
}
export function exponentialQuantile(p: number, rate: number): number {
  rateCheck(rate);
  finite(p, 0, 1);
  if (p === 1) throw new RangeError('Finite quantile requires p<1');
  return p === 0 ? 0 : -Math.log1p(-p) / rate;
}
