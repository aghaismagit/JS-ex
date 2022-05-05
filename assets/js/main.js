"use strict";

let numberOfFilms = 10;

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i ++) {
        const a = prompt('Последний из просмотренных фильмов?', ''),
              b = prompt('Рейтинг', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies [a] = b;
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
        console.log('Просмотрено слишком мало фильмов');
     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
         console.log('Вы классический зритель');
     } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }    
}

detectPersonalLevel();

function writeYourGenres() {
    for (let i = 1; i < 4; i ++) {
        const a = prompt(`Ваш любимый жанр ${i}?`, '');
    
        if (a != null && a != '') {
            personalMovieDB.genres [i - 1] = a;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }   
    }
}

writeYourGenres();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();