# @lp-labs/exponential-distribution

Exponential waiting-time density,CDF and inverse.

Original, standalone MIT TypeScript implementation with **zero runtime or peer dependencies**. ESM/CommonJS exports and separate declarations; Node18+ and compatible ES2022 browsers. No service, filesystem, network, clock or browser globals accessed on import. Compiler/formatter dependencies are development-only.

## Install

```sh
npm install @lp-labs/exponential-distribution
```

## Working example

```js
import { exponentialCdf } from '@lp-labs/exponential-distribution';
if (Math.abs(exponentialCdf(Math.log(2), 1) - 0.5) > 1e-12) throw new Error('Distribution');
```

CommonJS: `const api = require('@lp-labs/exponential-distribution')`.

## Behavior, customization and limits

Ideal mathematical probability model,not inference,fitting,random sampling or a guarantee about real observations. Negligible floating-point probabilities may underflow0 explicitly. exponentialPdf/Cdf(x,rate) require finite x[-1e100,1e100],rate[1e-12,1e12]; negative x gives0. exponentialQuantile(p,rate) requires p[0,1),excludes infinite upper endpoint. Uses expm1/log1p for small probabilities. Constant time. No memoryless process simulator or fitting.

Use the explicit function arguments and public types below to customize the documented behavior. There are no hidden environment settings or sibling-library requirements. Array inputs must be dense; sparse entries are invalid. Inputs are validated before a successful result is returned. Outputs do not mutate caller-owned inputs. Hostile proxies/getters and concurrent mutation are outside the contract.

## Errors and integration

Invalid data never produces an empty success-shaped substitute. TypeError reports incompatible runtime types/nonfinite numbers; RangeError reports unsupported ranges, invalid syntax, inconsistent states and exceeded budgets. Functions that explicitly return null, false or empty arrays describe those legitimate outcomes above. Errors propagate to callers; UI applications should catch at their boundary and visibly notify users. Numerical calculations use JavaScript IEEE754 unless the API explicitly uses bigint; compare approximate numerical results with application-appropriate tolerances.

## Complete public API

```ts
export declare function exponentialPdf(x: number, rate: number): number;
export declare function exponentialCdf(x: number, rate: number): number;
export declare function exponentialQuantile(p: number, rate: number): number;
```

## Performance and portability

Complexity and resource ceilings are specified above. Buffered synchronous algorithms do not create workers or timers; callers can move expensive work to their own worker. Limits are enforced, not silently truncated. No runtime imports from any other library. No compatibility or completeness claims beyond the stated scope.

## Support

If this library is useful to you, consider supporting its maintenance with a [donation via PayPal](https://www.paypal.me/LibinPrasanth).

## Author

Created by [Libin Prasanth](https://www.linkedin.com/in/libinprasanth/). Connect on LinkedIn for updates and discussion.
