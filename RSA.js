/**
 * Very simple RSA implementation written for USU FSLC demonstration
 *
 * Author: Kyle Hovey
 */

// Them good good functions
_ = require('lodash');


/**
 * RSA relies on numbers being prime, so it would only make sense that
 * we should first be able to know what a prime number is.
 * @param {Number} n Number to check that is prime
 * @return {Number}
 */
function isPrime(n) {
  if (n === 1 || n % 2 === 0 && n > 2) {
    return false;
  } else {
    return _
      .range(2, Math.sqrt(n) + 1)
      .map(x => n % x === 0)
      .reduce((_isPrime, divisible) => _isPrime && !divisible, true)
      || n === 2
  }
}

/**
 * We would also like to find a somewhat "random" prime number
 * @param {Number} min Minimum size
 * @param {Number} max Maxiumum size
 * @return {Number}
 */
function randomPrime(min = 0, max = 1e6) {
  let out;
  do {
    out = _.random(min, max);
  } while (!isPrime(out));

  return out;
}
