let obj = {};
Object.defineProperty(obj, 'name' , { value : 'Deven' , writable: true, enumerable: true });
const p  = new Proxy(obj, {
   get(target, key){
			if(key in target){
				return String(target[key]).toUpperCase();
			}else{
				throw new TypeError('the key was not found')
			}
       
   }
});
console.log(p.name); // DEVEN


return;
let obj = {};
Object.defineProperty(obj, 'name' , { value : 'Deven' , enumerable: true });
const p  = new Proxy(obj, {
   get(target, key){
			if(key in target){
				return target[key];
			}else{
				throw new TypeError('the key was not found')
			}
       
   }
});
console.log(p.name); // Deven
console.log(p.abc); // TypeError: the key was not found


return ;
let obj = {};
 Object.defineProperty(obj, 'name' , { value : 'Deven' , enumerable: true });

 const p  = new Proxy(obj, {
    get(){
        return 42;
    }
 });
 console.log(obj.name); // Deven
 console.log(p.name); // TypeError: 'get' on proxy: property 'name' is a read-only and non-configurable data property on the proxy target but the proxy did not return its actual value (expected 'Deven' but got '42')