"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
      personalMovieDB.count = +prompt ('How many films heve you seen yet?', '');
    
      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt ('How many films heve you seen yet?', '');
      }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
      if (personalMovieDB.count < 10) {
        console.log('You have seen not so many films');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('You are expirienced viewer');
    } else if (personalMovieDB.count >= 30) {
        alert('You are movie buff');
    } else {
        console.log('Error');
    }
    },
    showMyDB: function(hidden) {
      if (!hidden) {
        console.log(personalMovieDB);
      }
    },
    toggleVisibleMyDB: function() {
      if (personalMovieDB.private) {
        personalMovieDB.private = false;
      } else {
        personalMovieDB.private = true;        
      }
    },
    writeYourGenres: function() {
      for (let i = 1; i <= 3; i++) {
        let genre = prompt(`You favourite genre ${i}`);
        
        if (genre === '' || genre === null) {
          console.log('You have putted invalid data');
          i--;
        } else {
          personalMovieDB.genres[i - 1] = genre;
        }    
      }
      personalMovieDB.genres.forEach((item, i) => {
        // console.log(`Your favourite genre #(number according the order, starting from 1) - this is a (name of arrow)`)
        console.log(`Your favourite genre ${i + 1} - this is a ${item}`)
      });
    }
};


// !!!previous code (before destructurization):

// let numberOfFilms;

// function start() {
//   numberOfFilms = +prompt ('How many films heve you seen yet?', '');

//   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt ('How many films heve you seen yet?', '');
//   }
// }
// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false
// };

// function rememberMyFilms(){
//   for (let i = 0; i < 2; i++) {
//     const a = prompt('Last film that you have seen?', ''),
//           b = prompt('How yould you rate it from 0 to 5?', '');
  
//     if (a != null && a != '' && b != '' && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log('done');
//     } else {
//       console.log('error');
//       i--;
//     }
//   }
// }
// rememberMyFilms();

// function detectPersonalLevel() {
//   if (personalMovieDB.count < 10) {
//     console.log('You have seen not so many films');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//     console.log('You are expirienced viewer');
// } else if (personalMovieDB.count >= 30) {
//     alert('You are movie buff');
// } else {
//     console.log('Error');
// }
// }
// detectPersonalLevel();

// function showMyDB(hidden) {
//   if (!hidden) {
//     console.log(personalMovieDB);
//   }
// }
// showMyDB(personalMovieDB.private);


// function writeYourGenres(){
//   for (let i = 1; i <= 3; i++) {
//     // const genre = prompt(`You favourite genre ${i}`);
//     // personalMovieDB.genres[i - 1] = genre;
     
//     personalMovieDB.genres[i - 1] = prompt(`You favourite genre ${i}`);
//   }
// }
// writeYourGenres();




