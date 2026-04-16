## Prime Numbers
A **prime number** is a natural number greater than **1** that has exactly **two distinct positive divisors**: `1` and itself.
* If a number has more than two divisors, it is called a **composite number**
---
## Examples
* **Prime numbers:** `2, 3, 5, 7, 11`
* **Composite numbers:** `4, 6, 8, 9`
> **Note:** `2` is the **only even prime number**. All other even numbers are divisible by `2`, making them composite.
---
## Properties of Prime Numbers
* A prime number `p` has only two divisors: **1 and p**
* If a number `n` is composite, it must have a factor **≤ √n**
> This property is widely used in **primality testing algorithms**
---
## Methods for Testing Primality
### 1. Trial Division Method
The simplest method to check if a number is prime.
* Test divisibility from `2` to `√n`
```text
step 1: Input n
step 2: If n ≤ 1, not prime
step 3: For i = 2 to √n
step 4: If n mod i = 0, not prime
step 5: If no divisor found, n is prime
```
### Example
Check `n = 29`:
* √29 ≈ 5.38 → test `2, 3, 4, 5`
* No divisor found
**29 is prime**
---
### 2. Fermat Primality Test
Based on **Fermat’s Little Theorem**:
```text
a^(p−1) ≡ 1 (mod p)
```
To test a number `n`:
* Choose `a` such that `1 < a < n`
* Check if:
```text
a^(n−1) mod n = 1
```
* If not equal to `1` → **composite**
* If equal → **probably prime**
### Example
Test `n = 7`, `a = 2`:
```text
2^6 = 64 ≡ 1 (mod 7)
```
> Passes the test
> **Limitation:** Some composite numbers (**Carmichael numbers**) may pass this test.
---
### 3. Miller–Rabin Primality Test
A **probabilistic** and more reliable test.
* Express:
```text
n−1 = 2^k × d   (d is odd)
```
* Check:
```text
a^d ≡ 1 (mod n)
```
or
```text
a^(2^i × d) ≡ -1 (mod n)
```
* If neither holds → **composite**
> Repeating the test with different values of `a` increases accuracy.
---
### 4. Sieve of Eratosthenes
Used to generate all prime numbers up to a limit `N`.
```text
step 1: List numbers from 2 to N
step 2: Mark 2 as prime, eliminate multiples of 2
step 3: Move to next unmarked number, mark as prime
step 4: Eliminate its multiples
step 5: Repeat until √N
```
### Example
For `N = 20`, primes are:
* `2, 3, 5, 7, 11, 13, 17, 19`
---
## Applications
Prime numbers are essential in:
* **Cryptography**
* **RSA algorithm**
* **Secure key generation**
* **Data encryption**
> Security in modern cryptography relies on the **difficulty of factoring large composite numbers into primes**.
