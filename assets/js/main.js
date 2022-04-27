"use strict";
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i ++) {
    const a = prompt('Последний из просмотренных фильмов?', ''),
          b = prompt('Рейтинг', '');
    // personalMovieDB.movies [a] = b;

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies [a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }   
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено слишком мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);

