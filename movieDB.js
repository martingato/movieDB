let numberOfFilms = prompt ('How many films heve you seen yet?', '');
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (i = 0; i < 2; i++) {
    const a = prompt('Last film that you have seen?', ''),
          b = prompt('How yould you rate it from 0 to 5?', '');

    personalMovieDB.movies[a] = b;
};

console.log(personalMovieDB);