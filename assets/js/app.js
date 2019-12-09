"use strict";

$(document).ready(function () {

    fetch('data.json')
        .then(function (res) {
            if (res.status === 200) return res.json();
            console.log(`${res.status}: ${res.statusText}`);
        })
        .then(function (res) {
            if (!localStorage.getItem('dataPhoto')) {
                setLocalStorage(res, 'dataPhoto');
                // dataLocalPhoto = getLocalStorage('dataPhoto');
            }
        });


    let slide = function() {
        if (!isPaused) {
            slideNumber++;
            if (slideNumber >= dataLocalPhoto.length) slideNumber = 0;
            $(`.slide-img`).attr('src', dataLocalPhoto[slideNumber].src);
        } 
    }

    setTimeout(function () {
        dataLocalPhoto = getLocalStorage('dataPhoto');
    }, 1000);

    // slider
    let isPaused = false;

    let autoSlide = setInterval(slide, 3000);

    let slideNumber = 0;

    const funcSlider = () => {
        isPaused = true;

        setTimeout(function () {
            isPaused = false;
        }, 5000);
    }

    $(`#arrowForward`).on('click', function () {
        funcSlider();
        slideNumber++;
        if (slideNumber >= dataLocalPhoto.length) slideNumber = 0;
        $(`.slide-img`).attr('src', dataLocalPhoto[slideNumber].src);
    });

    $(`#arrowBack`).on('click', function () {
        funcSlider();
        if (slideNumber === 0) slideNumber = (dataLocalPhoto.length);
        slideNumber--;
        $(`.slide-img`).attr('src', dataLocalPhoto[slideNumber].src);
    });

    //modal window
    $(`#register, .closed`).on('click', function () {
        $(`#fon`).toggleClass('hide');
    });
});