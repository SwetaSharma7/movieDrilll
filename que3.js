//  Q.3 Find all movies of the actor "Leonardo Dicaprio".

const moviesList = require('./items');

const objectArr = Object.entries(moviesList);
const arrayOfObjects = objectArr.map(([name, details]) => ({name, ...details}));

const actor = arrayOfObjects.filter(arrayOfObjects => arrayOfObjects.actors.includes("Leonardo Dicaprio"));
console.log(actor);