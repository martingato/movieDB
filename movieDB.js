let numberOfFilms = +prompt ('How many films heve you seen yet?');
console.log(numberOfFilms);


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const movies = {
    logan:''
};

movies[0] = prompt('Last film that you have seen');
movies[1] = prompt('Last film that you have seen');
movies[2] = prompt('How would you rate it?');
movies[3] = prompt('How yould you rate it?');

console.log(movies);
console.log(personalMovieDB);

//comments



