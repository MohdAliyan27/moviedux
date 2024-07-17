//REST Operator

// function restOp(first, ...restOptions) {
//   console.log(first);
//   console.log(...restOptions);
//   //var values = restOptions.forEach((name) => console.log(name));
// }

// restOp("Anil", "Sunil", "Zub", "Peter", "Tom", "Bob");
// //console.log(values);

//SPREAD Operator

const fruit = ["apple", "orange", "papaya"];
const moreFruits = ["kiwi", "melons", "banana"];

const allFruits = [...moreFruits, ...fruit];

console.log(allFruits);
//console.log([...new Set(allFruits)]);

const newState = [...fruit, "Mango"];
console.log(fruit);
console.log(newState);
