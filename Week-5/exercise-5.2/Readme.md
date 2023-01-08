# Exercise 5.2

Write a function called `vowelCount` which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string

## Guildline

- JS function should have Map API implemented.
- Map’s set functionality should have been used.
- Bonus - if space and time complexity is taken care.
- Reference

```javascript
function isVowel(char){ 
    return"aeiou".includes(char);
}
function vowelCount(str)
{
    const vowelMap = new Map();
    for(let char of str){
        let lowerCaseChar=char.toLowerCase();
        
        if(isVowel(lowerCaseChar)){
            if(vowelMap.has(lowerCaseChar)){
                vowelMap.set(lowerCaseChar,vowelMap.get(lowerCaseChar)+1);
            }else{
                 vowelMap.set(lowerCaseChar,1);
            }
        }
    }
    return vowelMap;
}
```

## Outcome:

Outcome:1.Understanding of Map API and its functionalities

- Understanding of Map API and its functionalities