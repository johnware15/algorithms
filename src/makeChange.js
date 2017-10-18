function makeChange({price, amountGiven}) {
  let changeObject = {'quarters': 0, 'dimes': 0, 'nickels': 0, 'pennies': 0}
  let change = amountGiven - price

  if(change >= 25) {
    Math.floor(change / 25)
    let quarters = Math.floor(change / 25)
    change = (change % 25)
    changeObject.quarters = quarters
  }

  if(change >= 10) {
    Math.floor(change / 10)
    change = (change % 10)
    changeObject.dimes = dimes
  }

  if(change >= 5) {
    Math.floor(change / 5)
    let nickels = Math.floor(change / 5)
    change = (change % 5)
    changeObject.nickels = nickels
  }

  if(change > 0) {
    let pennies = change
    changeObject.pennies = pennies
  }

  return changeObject
}
