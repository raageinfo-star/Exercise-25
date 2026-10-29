let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combined = [...arr1, ...arr2];

console.log(combined);

console.log("Exercise 2: Rest Parameter")

function multiply(...numbers) {
    return numbers.reduce((total, num) => total * num, 1);
}

console.log(multiply(2, 3));
console.log(multiply(2, 3, 4));
console.log(multiply(2, 3, 4, 5));