## Classic

# algorithms
Daily algorithm practice


- [x] #### fizzBuzz

    Return an array of numbers from 1 to 100.

    For multiples of three, use the string `Fizz` instead of the number and for multiples of five replace with `Buzz`.

    For numbers which are multiples of both three and five replace with `FizzBuzz`.

    ```javascript
    fizzBuzz()
    // => [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', ...]
    ```
    
   

- [ ] #### makeChange

    Given a price and an amount paid in $US, return the number of coins in each denomination that should be given as change, if the seller is required to minimize the total number of coins comprising the change. Use a source, such as the (United States Mint)[https://www.usmint.gov/circulating-coins-production?program=Circulating+Coins], to determine which denominations of coins are in circulation. As shown in the examples, all denominations must be included in the returned object, even when the count of coins of a denomination is 0. There is no constraint on the order of the entries in a returned object.

    _Note: because JavaScript is [bad at decimal math](http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html), the inputs are given as integers that represent dollar + cent amounts, so `139` = $1.39._

    ```javascript
    makeChange({ price: 100, amountGiven: 100 })
    // => { quarters: 0, dimes: 0, nickels: 0, pennies: 0 }

    makeChange({ price: 159, amountGiven: 200 })
    // => { quarters: 1, dimes: 1, nickels: 1, pennies: 1 }

    makeChange({ price: 432, amountGiven: 500 })
    // => { quarters: 2, dimes: 1, nickels: 1, pennies: 3 }
    ```
