// Datatypes are of two types

// 1.Primitives/ call by value
// string, number, boolean, null, undefined, symbol, bigInt
const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id);
// console.log(anotherId);

let bigNumber = 45363383932245633738299293747388747384877637374463473843493493043446n;

// console.log(typeof bigNumber);


// 2.Non-primitives/ Reference

// objects,array and function

// array
const heros = ["shaktimaan", "spiderman", "hanuman"]

let myObj = {
    name:"suraj",
    age: 26,
    canVote: true
}

const myFunction = function(){
    console.log("Hello,World!");
} 


console.log(typeof myFunction);