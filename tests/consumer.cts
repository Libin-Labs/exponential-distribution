import { exponentialCdf } from '@lp-labs/exponential-distribution';
if (Math.abs(exponentialCdf(Math.log(2), 1) - 0.5) > 1e-12) throw new Error('Distribution');
// @ts-expect-error invalid argument must be rejected by declarations
exponentialCdf('1', 2);
