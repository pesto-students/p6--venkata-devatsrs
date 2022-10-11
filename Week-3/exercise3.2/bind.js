
// .bind() Method

// default 
const appType = 'App List' ;
const appName = 'here!' ;

// What is best App
let best = {
    app : function(like){

        if (this.appType === undefined){this.appType = appType;}
        if (this.appName === undefined){this.appName = appName;}
        if (like === undefined){like = '';}

        return `Best ${this.appType} is ${this.appName} ${like}`;
    }
};

// What are  best Apps
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

let result = best.app.bind();
// ! Need to run function result() as bind returns a new copy of the function
console.log(result());

result = best.app.bind(email, ', Wow');
console.log(result());

result = best.app.bind(messenger,', I like it');
console.log(result());

result = best.app.bind(editor,', I love it');
console.log(result());

// Output:
// Best App List is here! 
// Best Email is Gmail , Wow
// Best Messenger is Skype , I like it
// Best Editor is VS Code , I love it