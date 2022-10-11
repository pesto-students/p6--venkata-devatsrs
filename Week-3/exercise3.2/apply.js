
// .call() Method

const appType = 'App List' ;
const appName = 'here!' ;
let best = {
    app : function(like){

        if (this.appType === undefined){this.appType = appType;}
        if (this.appName === undefined){this.appName = appName;}
        if (like === undefined){like = '';}

        return `Best ${this.appType} is ${this.appName} ${like}`;
    }
};
let email = {
    appType : 'Email' ,
    appName : 'Gmail',
}
let messenger = {
    appType : 'Messenger' ,
    appName : 'Skype',
}
let editor = {
    appType : 'Editor' ,
    appName : 'VS Code',
}

let result = best.app.apply();
// ! Same as .call() but need array argument
console.log(result); 

result = best.app.apply(email, [', Wow']);
console.log(result);

result = best.app.apply(messenger,[', I like it']);
console.log(result);

result = best.app.apply(editor,[', I love it']);
console.log(result);

// Best App List is here! 
// Best Email is Gmail , Wow
// Best Messenger is Skype , I like it
// Best Editor is VS Code , I love it