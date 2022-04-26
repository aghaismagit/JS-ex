"use strict";
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Последний из просмотренных фильмов?', ''),
      b = prompt('Рейтинг', ''),
      c = prompt('Последний из просмотренных фильмов?', ''),
      d = prompt('Рейтинг', '');

personalMovieDB.movies [a] = b;
personalMovieDB.movies [c] = d;

console.log(personalMovieDB);

