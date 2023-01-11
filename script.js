"use strict";

/*
// function scope
function calAge(birthYear) {
  const age = 2022 - birthYear;
  // console.log(firstName);
  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1990 && birthYear <= 1996) {
        const firstName ='Ishan'
      const str = `Oh and you're a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
      console.log(add(3, 4));
    }
  }
  printAge();

  return age;
}

const firstName = "bk"; // Global Scope
calAge(1990);
*/

//  EX______________________function function function function function

// console.log(addDecl(2, 5));
// console.log(addExpr(2, 5));
// console.log(addArrow(2, 5));

/*
// function  decoreation
function addDecl(a, b) {
  return a + b;
}

// function exprestion
const addExpr = function(a, b) {
  return a + b
}

const addArrow = (a, b) => a + b;


console.log(addDecl(2, 5));
console.log(addExpr(2, 5));
console.log(addArrow(2, 5))
*/

//  EX___________END___________function function function function function

// Example----------------------------------------------

// Ex...1
// if(!numProduct) deletShopingCard()

// const numProduct = 10;

// function deletShopingCard() {
//   console.log('All product deleted!');
// }

// Ex...2
// var x = 2;
// let y = 3;
// const z = 4;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// 96. The this Keyword ----------------------START-------------------------

// example this Keyword

// Ex...1
/*console.log(this);
const calAge =  function(birthYear) {
  console.log(2033 - birthYear);
  console.log(this);
}

calAge(1992)
*/

// Ex...2
/*const jonas =  {
  year: 1990,
  calAge: function() {
    console.log(2022 - this.year);
  }
 }
 jonas.calAge()
 */
// Ex

// 96. The this Keyword ----------------------END-------------------------

// 98. Regular Functions vs. Arrow Functions ---------------------START---------------------------
// EX..1

/*const jonas = {
  firstName: "Bk",
  year: 1991,
  calAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or this
    // const isMillenial = function() {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // }

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calAge();

*/

// Arguments Keyword

// const addExpr = function(a, b) {
//   console.log(arguments);
//   return a + b
// }
// addExpr(2,6)
// addExpr(2,6, 7, 9)

// const addArrow = (a, b) => a + b;

// 99. Primitives vs. Objects (Primitive vs. Reference Types) -------------------start

// Primitives tyeps ----
let lastName = "Patil";
let oldLastName = lastName;
lastName = "Kankate";
console.log(lastName, oldLastName);

// Reference types ----
// const anita = {
//   firstName: "Anita",
//   lastName: "Varade",
//   age: 2,
// };

// const marriedAnita = anita;
// marriedAnita.lastName = "Kankate";

// console.log("Befor marraiage:", anita);
// console.log("After marraiage:", marriedAnita);

// Copying objects
const anita2 = {
  firstName: "Anita",
  lastName: "Varade",
  age: 20,
  family: ["Sam", "Radha"],
};
const anitaCopy = Object.assign({}, anita2);
anitaCopy.lastName = "Kankate";

anitaCopy.family.push("Ishan");
anitaCopy.family.push("Abhi");

console.log("Befor marraiage:", anita2);
console.log("After marraiage:", anitaCopy);
