// # Problem 7.4: Parenthesis Checker

function checkParenthesis(string){

    // const array = "{([])}".split("");
    const array = string.split("");
    // console.log(array);

    const openBrackets = [ '{' , '[' , '('];
    const closeBrackets = [ '}' , ']' , ')'];
    const stack = [];
    
    if (array.length === 0 ) return false;

    for(let i = 0; i < array.length ; i++ ){
        
        //console.log(stack);

        if(stack.length == 0 ){
            stack.push(array[i]);
        } else if(stack[stack.length-1] ===  openBrackets[closeBrackets.indexOf(array[i])]     ){
            stack.pop();
        }else {
            stack.push(array[i]);
        }
    
    }

    console.log(string , stack.length === 0);
    
}


checkParenthesis("{([])}");
checkParenthesis("{([])");
checkParenthesis("{)");
checkParenthesis("");
checkParenthesis("()");
checkParenthesis("(){}}{");