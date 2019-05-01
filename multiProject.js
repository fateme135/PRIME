// /////////////////////////////project1///////////////////////////////////////
// //description: The prime numbers of 1 to the number//
// function primeastyana(argoman) {
//   for (let i = 2; i <= Math.sqrt(argoman); i++) {
//     if (argoman % i === 0) {
//       return "THIS NUMBER IS'NT PRIME";

//     }
//   }
//   return "THIS NUMBER IS PRIME";
// }
// function addAvalyabTaAdadMoredenazar(arg) {
//   for (let i = 2; i <= arg; i++) {
//     if (primeastyana(i) === "THIS NUMBER IS PRIME") {
//       console.log(i);
//     }
//   }
// }
// console.log(addAvalyabTaAdadMoredenazar(prompt("PLEASE ENTER NUMBER ")));
// //////////////////////////////////////project 2////////////////////////////////
// //description: Three letters in the middle.//
// let str = prompt("please enter your string ")

// function findmiddle(arg) {
//   if (arg.length <= 3) {
//     console.log(" your word is than less 3")
//   }
//   if (arg.length % 2 === 0) {
//     console.log(" your word is EVEN")
//   }
//   if (arg.length % 2 === 1) {
//     console.log(arg.charAt(Math.floor(arg.length / 2 - 1)) + arg.charAt(arg.length / 2) + arg.charAt(arg.length / 2 + 1));
//   }
// }
// console.log(findmiddle(str));
// //////////////////////////////////////project3//////////////////////////////////
// //description:sort members of array .//
// function sorti1(resu) {
//   let arraysortshode = resu.sort(function (a, b) { return b.length - a.length });
//   return arraysortshode;
// }
// let point = ["sara", "farid", "reza", "arshida", "ali", "fateme"];
// console.log(sorti1(point));
// //////////////////////////////////////project4///////////////////////////////
// //description : first of letter of string be capitalize//
// function capitalize(str) {
//   var arrayasli = str.split(' ');
//   var array = [];
//   for (var i = 0; i < arrayasli.length; i++) {
//     array.push(arrayasli[i].charAt(0).toUpperCase() + arrayasli[i].slice(1).toLowerCase());
//   }
//   return array.join(' ');
// }
// console.log(capitalize(prompt(" ENTER YOUR SENTENCE...")));
// ////////////////////////////////////project5///////////////////////////////
// //description : delete vowels letters//
// function search() {
//   let str = prompt("enter a string:");
//   let kalame = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) !== "a" && str.charAt(i) !== "i" && str.charAt(i) !== "u"
//       && str.charAt(i) !== "e" && str.charAt(i) !== "o") {
//       kalame += str.charAt(i);
//     }
//   }
//   document.write(kalame);
// }
// search();
// ////////////////////////////////////project6-1///////////////////////////////
// //description: reserve a number 
// let num = 0;
// let num2 = 0;
// function reversenumber(arg) {
//   while (arg > 0) {
//     num = arg % 10;
//     arg = Math.floor(arg / 10);
//     num2 = num2 * 10 + num;
//   }
//   return num2
// }
// console.log(reversenumber(prompt("PLEASE ENTER ONE NUMBER")));
// //////////////////////////////////////project6-2///////////////////////////////
// //description: reserve a string
// function baraxkardanad() {
//   let kalame = prompt("enter your num");
//   let v = "";
//   for (let i = kalame.length; i > -1; i--) {
//     v += kalame.charAt(i)
//   }
//   console.log(Number(v));
// }
// baraxkardanad();
// ///////////////////////////////////project7////////////////////////////////////
// //description: longest word in a string
// function bozorgtarinkalame() {
//   let voroodi = prompt("enter your sentence :")
//   let joda = voroodi.split(" ");

//   let defult = 0;
//   let kalame = "";
//   for (let i = 0; i < joda.length; i++) {
//     if (joda[i].length > defult) {
//       defult = joda[i].length;
//       kalame = joda[i];
//     }
//   }
//   console.log(kalame);
// }
// bozorgtarinkalame();
// ///////////////////////////////////project8////////////////////////////////////
//// description :mirror
// function qarineyabi() {
//   let word = prompt("enter your word:");

//   for (let i = 0; i < word.length / 2; i++) {
//     if (word[i] == word[word.length - i - 1]) {
//       continue;
//     }
//     else
//       return (" qarine nist ");
//   }
//   return (" qarine ast ");

// }
// console.log(qarineyabi());
///////////////////////////////////////project9///////////////////////////////////
//// description :bubble sort
let arr = [3, 4, 12, 5, 1, 2, 12, 76]
let defult = 0;
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      defult = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = defult;
    }
  }
}
console.log(arr);
///////////////////////////////////////project10///////////////////////////////////
//// description :Depth of an array
let arr = [1, [1, 2], 3, [4, 5, [6]]];
let counter = 1;
let counter2 = 1;
function dethrecursive(arg) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof (arg[i]) === "object") {
      ++counter;
      dethrecursive(arg[i]);
    }
    if (counter > counter2) {
      counter2 = counter;
    }
  }
  return counter2;
}
console.log(dethrecursive(arr));
