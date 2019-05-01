/////////////////////////////project1///////////////////////////////////////
//description: The prime numbers of 1 to the number//
function primeastyana(argoman) {
  for (let i = 2; i <= Math.sqrt(argoman); i++) {
    if (argoman % i === 0) {
      return "THIS NUMBER IS'NT PRIME";

    }
  }
  return "THIS NUMBER IS PRIME";
}
function addAvalyabTaAdadMoredenazar(arg) {
  for (let i = 2; i <= arg; i++) {
    if (primeastyana(i) === "THIS NUMBER IS PRIME") {
      console.log(i);
    }
  }
}
console.log(addAvalyabTaAdadMoredenazar(prompt("PLEASE ENTER NUMBER ")));
//////////////////////////////////////project 2////////////////////////////////
