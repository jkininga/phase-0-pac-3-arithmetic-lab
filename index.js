// 1 + 80;
// 60 - 40;
// 2 * 3.4;
// 5.0 / 2.5;

function add(a,b)
{
   return a + b
}

function subtract(a,b)
{
   return a - b
}
function multiply(a,b)
{
   return a * b 
}
function divide(a,b)
{
   return a / b
}

function increment(n)
{
    return (n += 1);
}
console.log(increment(5))

function decrement(n)
{
    return (n -= 1);
}
console.log(increment())

function makeInt(n)
{
    return (parseInt(n, 10))
}


function preserveDecimal(n)
{
    return (parseFloat(n))
}


// //reset number
// number = 10;

// function add5() {
//   console.log((number += 5));
// }

// function divideBy3() {
//   console.log((number /= 3));
// }

// console.log(divideBy3()); //=> 3.3333333333333335

// console.log(add5()); //=> 8.333333333333334

// // reset number
// number = 10;

// add5(); //=> 15

// divideBy3(); //=> 

    // console.log(parseFloat("2.222"))

    // let str = "123"

    // console.log(makeInt(str))

    // let str = "123";
// console.log(parseInt("1"));



