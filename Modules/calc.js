
function add(x,y){
    var add=  x+y;
    return add;

}function sub(x,y){
    var sub = x-y;
    return sub;
}

function mul(x,y){
    var mul = x*y;
    return mul;
}
function div(x,y){
    return x/y;
}

function operation(fun,x,y){
    if(fun=="add")
return add (x,y)

if(fun=="sub")
return sub (x,y)

if(fun=="mul")
return mul (x,y)

if(fun=="div")
return div (x,y)

} 
//console.log(operation("add",1,2));

// let r1 = operation(add,13,8)
// console.log(r1)
// let r2= operation(sub,12,4)
// console.log(r2)
// let r3 = operation(mul,12,9)
// console.log(r3)
// let r4=operation(div,10,5)
// console.log(r4)
// return 0;
module.exports=operation;