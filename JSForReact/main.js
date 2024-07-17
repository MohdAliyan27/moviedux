// function main() {
//   console.log("test 1");
//   console.log("test 2");
// }

// main();

//VAR Keyword
//function main() {
//CASE 1
//   var x = 10;
//   console.log(x); //10
//CASE 2
//   var x = 10;
//   if (1) {
//     x = 20;
//     var x = 200;
//   }
//   console.log(x); // 200
//CASE 3
//   var x = 1;
//   if (1) {
//     x = 20;
//     var y = 20;
//   }
//   console.log(y); // var can be declared anywhere and can be accesses anywhere
//}

//main();

//let keyword

// (function main() {
//   //CASE 1
//   //   let x = 10;
//   //   if (true) {
//   //     let x = 20;
//   //     x = 4;
//   //     //let x=10; // we cannot declare x as it is already declared
//   //     console.log(x);
//   //   }
//   //   console.log(x);
// })();

//CONST KEYWORD
(function main() {
  //CASE 1
  //   const x = 10;
  //   // x = 20; //Assignment to constant variable.
  //   if (true) {
  //     const x = 20;
  //     console.log(x);
  //   }
  //   console.log(x);

  //CASE 2
  const emp = { empId: 1, empName: "Hello" };
  console.log(emp);

  emp.empName = "World";
  //emp ={name:"Hello"} //Assignment to constant variable is not allowed
  console.log(emp);
})();
