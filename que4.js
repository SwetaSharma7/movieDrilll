// Q.4 Sort movies (based on IMDB rating)
// if IMDB ratings are same, compare totalEarning as the secondary metric.

const movieList = require('./items');

const objectArr = Object.entries(movieList);
const arrayOfObjects = objectArr.map(([name, details]) => ({name, ...details}));

const sortedArr=arrayOfObjects.sort((a,b) => {
    let aIMDB=a.imdbRating;
    let bIMDB=b.imdbRating;

    if(aIMDB!=bIMDB){
        return bIMDB-aIMDB;

    }
    else{

        return  b.totalEarnings-a.totalEarnings ;
    }
})

console.log(sortedArr);