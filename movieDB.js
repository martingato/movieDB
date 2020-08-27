// "use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt ('How many films heve you seen yet?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt ('How many films heve you seen yet?', '');
  }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms(){
  for (let i = 0; i < 2; i++) {
    const a = prompt('Last film that you have seen?', ''),
          b = prompt('How yould you rate it from 0 to 5?', '');
  
    if (a != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('You have seen not quite many films');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('You are expirienced viewer')
} else if (personalMovieDB.count >= 30) {
    alert('You are movie buff');
} else {
    console.log('Error');
}
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.private);


function writeYourGenres(){
  for (let i = 1; i <= 3; i++) {
    // const genre = prompt(`You favourite genre ${i}`);
    // personalMovieDB.genres[i - 1] = genre;
     
    personalMovieDB.genres[i - 1] = prompt(`You favourite genre ${i}`);
  }
}

writeYourGenres();





// do {
//     i = 0; i < 2; i++;
//     const a = prompt('Last film that you have seen?', ''),
//           b = prompt('How yould you rate it from 0 to 5?', '');

// if  {
//   personalMovieDB.movies[a] = b;
//   console.log('done');

// } while (a != null && b != null & a != '' && b != '' && a.length < 10);

// else {
//   alert('Please, answer the questions =)');
//   i--;
// }

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

// console.log(personalMovieDB);


    // if (a === "") {
    //     const a = prompt('Last film that you have seen?', ''),
    //           b = prompt('How yould you rate it from 0 to 5?', '');
    //       };
    //       else if (a.lenght >= 10) {
    //           const a = prompt('The name is too long. Let\'s try again', '');
    //                 b = prompt('How yould you rate it from 0 to 5?', '');


