let x = 5;
function scopeTest(){
    console.log(x);
    var x = 10;
}
scopeTest();