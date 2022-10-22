// <script src="script.js" type="module" ></script>
console.log(this); // undefined for web/windows


// --------------

//In Nodejs
console.log(this); // {} for nodejs
console.log(this === global ); // false -> file level this !== global 

// In Nodejs CJS commonjs modules -> this is bound to exports object 
console.log(this === exports ); // true 


function returnGlobalThis(){
    return this;
}
console.log(returnGlobalThis() === global ); // true