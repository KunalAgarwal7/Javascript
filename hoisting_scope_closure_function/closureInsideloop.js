function createIncrementer(){
    let count = 0;
    return function(){
        return ++count;
    };
}

let increment = createIncrementer();
console.log(increment);
console.log(increment());
