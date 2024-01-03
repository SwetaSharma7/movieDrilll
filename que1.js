// Q1. Find all the movies with total earnings more than $500M. 

const moviesList = require('./items');

const objectArr = Object.entries(moviesList);
// console.log(objectArr);

const arrayOfObjects = objectArr.map(([name, details])=> ({name, ...details}));
const totalEarning = arrayOfObjects.filter(arrayOfObjects => arrayOfObjects.totalEarnings > '$500M');
console.log(totalEarning);