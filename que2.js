// Q2. Find all the movies who got more than 3 oscarNominations and also totalEarning are more than $500M.

const movieList = require('./items');

const objectArr = Object.entries(movieList);

const arrayOfObjects = objectArr.map(([name, details]) => ({name, ...details}));
// console.log(arrayOfObjects);

const reqAns = arrayOfObjects.filter(arrayOfObjects => arrayOfObjects.oscarNominations > "3" && arrayOfObjects.totalEarnings > "$500M");
console.log(reqAns);