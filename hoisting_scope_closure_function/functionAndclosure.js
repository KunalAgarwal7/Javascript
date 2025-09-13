function outer(){
    var outerVar="outer";
    return function inner(){
        console.log(outerVar);
    };
}
var innerFunc = outer();
innerFunc();