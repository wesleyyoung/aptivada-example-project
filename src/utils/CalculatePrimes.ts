
export function CalculatePrimes(iterations: number, multiplier: number) {
  const primes = [];
  for (let i = 0; i < iterations; i++) {
    let candidate = i * (multiplier * Math.random());
    let isPrime = true;
    for (let c = 2; c <= Math.sqrt(candidate); ++c) {
      if (candidate % c === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(candidate);
    }
  }

  return primes;
}
