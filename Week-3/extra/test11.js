//check peroprty exists in object
const newobj = {
    firstName : "Dev",
};
console.log('firstName' in newobj) ; // true 
console.log('middleName' in newobj) ; // false
console.log('isPrototypeOf' in newobj) ; // true -> ? because object parent ( or super parent ) may have this property 
console.log('toString' in newobj) ; // true -> ? because object parent ( or super parent ) may have this property 
console.log(newobj.toString) ; // [Function: toString]
console.log(newobj.hasOwnProperty('toString')) ; // false
console.log(newobj.hasOwnProperty('firstName')) ; // true


return ;

// Accessing object properties 
var jane = {
    9 : "9",
    name : 'jane',
    'desc.fun' : function(){

        return "Person named " + this.name;
    }
}

//console.log(jane.desc.fun); // cant read property fun of undefined
console.log(jane['desc.fun']);
jane['desc.fun'] = 20
console.log(jane['desc.fun']); // 20
console.log(jane.nothing); // undefined ( no error in sloppy mode ) but Strict mode -> Cannot read properties of undefined

jane.nothing = 30; // ! added to the object 
//console.log(jane.9); // SyntaxError: missing ) after argument list
console.log(jane["9"]); 
delete jane["9"];
console.log(jane["9"]);  // undefined




return ;

//Object 

let obj = {};
obj[obj] = 10;
console.log(obj); // { '[object Object]': 10 }

console.log(obj.toString()); // [object Object]


// not advisable 
const obj1 = new Object();
obj1.nane = "Deven";
console.log(obj1); // { nane: 'Deven' }


//Alternative
const newObj = Object.create(Object.prototype);
newObj.name = "Deven";
