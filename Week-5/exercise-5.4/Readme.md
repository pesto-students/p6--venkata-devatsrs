# Exercise 5.4

Create a simple Javascript function code for addition, subtraction and multiplication
of 2 numbers and write the corresponding Jest based tests for it



```javascript

const mathOperations = {
  sum: function (a, b) {
    return a + b;
  },
  diff: function (a, b) {
    return a - b;
  },
  product: function (a, b) {
    return a * b;
  },
};

module.exports = mathOperations;

```

## Guildline
- Jest should’ve been installed.
- Package.json file should have the config for running test cases.
- Test case file should’ve been created. For example: calculator.test.js
- BDD style tests for each function should’ve been created for the same.
- All test cases should pass.
- Reference: https://www.softwaretestinghelp.com/jest-testing-tutorial/

## Outcome:

- Understanding the importance of writing test cases.
- How BDD works.
- What are the packages required for writing test cases?
- How to configure test cases in package.json file.