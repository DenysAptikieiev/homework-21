"use strict";

fetch('data.json')
    .then(function (res) {
        if (res.status === 200) return res.json();
        console.log(`${res.status}: ${res.statusText}`);
    })
    .then(function (res) {
        if (!localStorage.getItem('dataPhoto')) {
            setLocalStorage(res, 'dataPhoto');
        }
    });



$(document).ready(function () {

    setInterval(function () {
        dataLocalPhoto = getLocalStorage('dataPhoto');
    }, 1000);

    // slider
    let isPaused = false;

    let autoSlide = setInterval(function () {
        if (!isPaused) {
            slideNumber++;
            if (slideNumber >= dataLocalPhoto.length) slideNumber = 0;
            $(`.slide-img`).attr('src', dataLocalPhoto[slideNumber].src);
        } 
    }, 3000);

    let slideNumber = 0;

    $(`#arrowForward`).on('click', function () {
        isPaused = true;

        setTimeout(function () {
            isPaused = false;
        }, 5000);

        slideNumber++;
        if (slideNumber >= dataLocalPhoto.length) slideNumber = 0;
        $(`.slide-img`).attr('src', dataLocalPhoto[slideNumber].src);
    });

    $(`#arrowBack`).on('click', function () {
        isPaused = true;

        setTimeout(function () {
            isPaused = false;
        }, 5000);

        if (slideNumber === 0) slideNumber = (dataLocalPhoto.length);
        slideNumber--;
        $(`.slide-img`).attr('src', dataLocalPhoto[slideNumber].src);
    });

    //modal window
    $(`#register, .closed`).on('click', function () {
        $(`#fon`).toggleClass('hide');
    });
});