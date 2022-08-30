function receivesAFunction(secondFunction){
    secondFunction();
}

function returnsANamedFunction(){
    return function namedFunction(){
    }
}

function returnsAnAnonymousFunction(){
    return function(){}
}