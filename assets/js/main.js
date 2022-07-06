"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено слишком мало фильмов');
         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
             console.log('Вы классический зритель');
         } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }    
    },
    writeYourGenres: function() {
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
        personalMovieDB.genres.forEach(function(item, i) {
            console.log(`Любимый жанр №${i + 1} - это ${item}`);
        });
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function()  {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {personalMovieDB.privat = true;}
    },
    start: function() {
        personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', "");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', "");
        }
    }
};
