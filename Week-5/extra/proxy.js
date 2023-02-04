const target2 = {
    name : 'deven'
};
function log(object){
    return new Proxy(object, {
        get(target, keyName){
            console.log(`key ${keyName} was accessed`);
            //return target[keyName] + ':';
            return Reflect.get(target,keyName) + ":"
        }
    });
}

let o = log(target2);
o.name = "Deven Sitapara";
console.log(o.name);

return;

const target = {};
const handler = {};
const {proxy , revoke} =  Proxy.revocable(target, handler); 
proxy.foo = 'test';
console.log(proxy.foo); // test
revoke()
console.log(proxy.foo); // TypeError: Cannot perform 'get' on a proxy that has been revoked


return; 


const target2 = {
    name : 'deven'
};
function log(object){
    return new Proxy(object, {
        get(target, keyName){
            console.log(`key ${keyName} was accessed`);
            return target[keyName] + ':';
        }
    });
}

let o = log(target2);
o.name = "Deven Sitapara";
console.log(o.name);
// key name was accessed
// Deven Sitapara:


return 


const target1 = {
    name : 'deven'
};

const handler1 = {
    get(target, keyName ){
        console.log(`get trap called on key "${keyName}"`); 
        return 'whatever'
    }

};
const proxy1 = new Proxy(target1, handler1); 
console.log(proxy1); // { name: 'deven' }
console.log(proxy1.name); // ! whatever  //  get trap called on key "name"


return ;
const target = {
    name : 'deven'
};

const handler = {};
const proxy = new Proxy(target, handler); 
console.log(proxy); // { name: 'deven' }

