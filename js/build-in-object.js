const person = {
  firstName: "John",
  lastName: "Doe",
  age: "30",
};
// console.log(person);
// console.log(Object.keys(person));
// console.log(Object.values(person));

// fuction Statement
// function Area(x, y) {
//   return x * y;
// }

// function expression
// const Area = function Area(x, y) {
//   return x * y;
// };

// const area = (x, y) => x * y;

// console.dir(Function);

// const run = new Function("a", "b", "return a + b");
// console.log(run(5, 9));

// console.log(run.call(null, 4, 5));

// console.log(run.bind(null, 3, 8).apply());

// console.dir(Array.prototype);

// const arr = ["a", "b", "c", "d"];
// console.log(arr);

// const fruits = new Array("apple", "banana", "mango", "orange");
// console.log(fruits);

// const fruits = [
//   "apple",
//   "banana",
//   "orange",
//   "grape",
//   "kiwi",
//   "strawberry",
//   "pineapple",
// ];
// console.log(fruits.length);
// console.log(fruits.toString());
// console.log(fruits.join(" | "));

// console.log(fruits);
// console.log(fruits.pop());
// console.log(fruits);
// console.log(fruits.pop());
// console.log(fruits);
// console.log(fruits.push("arrow"));
// console.log(fruits);
// console.log(fruits.shift());
// console.log(fruits);
// console.log(fruits.unshift("oakar"));
// console.log(fruits);

// console.log(fruits.unshift("aaa"));
// console.log(fruits.unshift("bbb"));
// console.log(fruits.unshift("ccc"));
// console.log(fruits.shift());
// console.log(fruits.shift());
// console.log(fruits.shift());
// console.log(fruits.push("aaa"));
// console.log(fruits.push("bbb"));
// console.log(fruits.push("ccc"));
// console.log(fruits.pop());
// console.log(fruits.pop());
// console.log(fruits.pop());

// console.log(fruits.sort());
// console.log(fruits);

// let mixedArray = [1, "apple", 2, "banana", "Ant", 3, "orange", 4, "grape"];

// mixedArray.sort();
// console.log(mixedArray);
// mixedArray.reverse();
// console.log(mixedArray);
// console.log(Array.isArray(fruits));
// console.log(fruits.includes("banan"));
// console.log(fruits.indexOf("Kiwi"));
// console.log(fruits.slice(1, 5));
// console.log(fruits.splice(1, 5));

// console.log(fruits.concat(mixedArray));

// const result = [...fruits, ...mixedArray];

// const obj = { ...person };
// console.log(obj.firstName, obj.lastName, "is old", obj.age);

// console.log(result);

// Higher order function
// const numbs = [1, 2, 4, 5, 6, 7];

// const modifyArray = function (arr, logic) {
//   const result = [];
//   for (el of arr) {
//     result.push(logic(el));
//   }
//   return result;
// };
// call back function
// const hello = function (el) {
//   return el * 64504;
// };
// console.log(numbs);
// console.log(modifyArray(numbs, hello));
// const numbs = [1, 2, 4, 5, 6, 7];
// const chars = ["a", "e", "b", "d"];

// console.log(
//   chars.forEach(function (el, index, arr) {
//     console.log(el, index, arr);
//   })
// );
// console.dir(Array);

// fruits.forEach(function (el, index) {
//   console.log(el, index);
// });

// const yes = numbs.map(function (el, index, arr) {
//   console.log(el, index, arr);
//   return el * 5;
// });

// console.log(yes);
// const numbs = [1, 2, 4, 5, 6, 7];

// const saleProduct = products.map(function (el) {
//   console.log(("price", (el.price += 100)));
//   el.stock += 10;
//   return el;
// });
// const saleProduct = products.findIndex((el) => {
//   return el.id === 105;
// });

// console.log(saleProduct);
// const chars = ["a", "e", "b", "d", "c", "y"];

// console.log(
//   chars.reduce((pv, cv) => {
//     console.log(pv, cv);
//     return pv + cv;
//   }, "initial")
// );

// console.log(
//   numbs.reduce((pv, cv) => {
//     console.log(pv, cv);
//     return pv + cv;
//   }, 0)
// );

// console.log(
//   products.reduce((pv, cv) => {
//     return pv + cv.price;
//   }, 0)
// );

// console.log(
//   numbs.every((el) => {
//     return el > 5;
//   })
// );

// const sum = function (a, b) {
//   return a + b;
// };
// console.log(sum(3, 4));
// const arrowSum = (a, b) => a + b;
// console.log(arrowSum(6, 8));

// const circleArea = function (r) {
//   return Math.PI * r ** 2;
// };

// const arrowCircleArea = (r) => Math.PI * r ** 2;

// console.log(arrowCircleArea(30));

// const area = (w, h) => w * h;

// console.log(area(5, 6));

// const arrowFindAge = (dateString) => {
//   const date = new Date();
//   const currentYear = date.getFullYear();

//   const inputDate = new Date(dateString);
//   const birthYear = inputDate.getFullYear();

//   return currentYear - birthYear;
// };

// console.log(arrowFindAge("1997-11-2"));

const chars = ["a", "e", "b", "d", "c", "y"];
// const numbs = [1, 2, 4, 5, 6, 7];
//

// products.sort((a, b) => b.price - a.price);

// console.table(products);

// products.sort((a, b) => a.price - b.price);

// console.table(products);

// const arr = [];
// arr[0] = "a";
// arr[1] = "b";
// arr[2] = "c";

// console.log(arr);

//stock > 100 , discount 20\
// const products = [
//   { id: 101, name: "Smartphone", price: 599.99, stock: 25 },
//   { id: 102, name: "Laptop", price: 1299.99, stock: 15 },
//   { id: 103, name: "Headphones", price: 89.99, stock: 50 },
//   { id: 104, name: "Fitness Tracker", price: 49.99, stock: 30 },
//   { id: 105, name: "Portable Speaker", price: 79.99, stock: 20 },
// ];

// console.table(products);
// console.table(
//   products
//     .filter((product) => product.stock >= 30)
//     .map((product) => ({ ...product, price: product.price - 3 }))
//     .map((product) => product.name)
//     .join("\n")
// );

// class Test (
//   aaa () =>  ( { prop:value} )
// )

const arr = ["a", "b", "c"];

const [x, y, z] = arr;

console.log(x);
console.log(y);
console.log(z);
