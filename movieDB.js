// "use strict";
let numberOfFilms = +prompt ('How many films heve you seen yet?', '');
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

do {
    i = 0; i < 2; i++;
    const a = prompt('Last film that you have seen?', ''),
          b = prompt('How yould you rate it from 0 to 5?', '');

// if  {
//   personalMovieDB.movies[a] = b;
//   console.log('done');

} while (a != null && b != null & a != '' && b != '' && a.length < 10);

else {
  alert('Please, answer the questions =)');
  i--;
}

// for (i = 0; i < 2; i++) {
//     const a = prompt('Last film that you have seen?', ''),
//           b = prompt('How yould you rate it from 0 to 5?', '');

//     if (a != null && b != null & a != '' && b != '' && a.length < 10) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         alert('Please, answer the questions =)');
//         i--;
//     }
// };  

// if (personalMovieDB.count < 10) {
//     alert('You have seen not quite many films');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//     alert('You are expirienced viewer')
// } else {
//     alert('You are movie man');
// };

console.log(personalMovieDB);







    // if (a === "") {
    //     const a = prompt('Last film that you have seen?', ''),
    //           b = prompt('How yould you rate it from 0 to 5?', '');
    //       };
    //       else if (a.lenght >= 10) {
    //           const a = prompt('The name is too long. Let\'s try again', '');
    //                 b = prompt('How yould you rate it from 0 to 5?', '');


