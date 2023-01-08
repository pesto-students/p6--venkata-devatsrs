// Write a function called `vowelCount` which accepts a string and returns a map
// where the keys are numbers and the values are the count of the vowels in the string

function isVowel(char) {
  return "aeiou".includes(char);
}

// with help of for...of loop
function vowelCount(str) {
  const vowelMap = new Map();

  for (let char of str) {
    let lowerCaseChar = char.toLowerCase();

    if (isVowel(lowerCaseChar)) {
      if (vowelMap.has(lowerCaseChar)) {
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
      } else {
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
}

// with help of object
function vowelCount2(str) {
  const counts = {};

  str.split("").forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });

  return new Map(Object.entries(counts));
}

// more optimized way
function vowelCount3(str) {
  let vowelMap = new Map();

  str.split("").forEach((x) => vowelMap.set(x, vowelMap.get(x) || 0 + 1));

  return vowelMap;
}

console.time();
const result1 = vowelCount("aa ee ii oo uu"); //default: 0.311ms  Map(5) { 'a' => 4, 'e' => 4, 'i' => 4, 'o' => 4, 'u' => 4 }
console.timeEnd();
console.log(result1);

console.time();
const result2 = vowelCount2("aa ee ii oo uu"); // default: 0.086ms
console.timeEnd();
console.log(result2);

console.time();
const result3 = vowelCount3("aa ee ii oo uu"); // default: 0.068ms
console.timeEnd();
console.log(result3);
