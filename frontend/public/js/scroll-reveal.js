/*

* @file: scroll-reveal.js
* @description: Script for showing elements when the user scrolls.
* @author: Emanuel Borges

* @date: 2026-06-24

* @version: 1.0.0
*/

window.revealElement = ScrollReveal({reset:true});

// duration per second txt
revealElement.reveal('.txt-scroll-effect-1s', {
    duration: 1000,
    distance: '90px'
})

revealElement.reveal('.txt-scroll-effect-2s', {
    duration: 2000,
    distance: '90px'
})

revealElement.reveal('.txt-scroll-effect-3s', {
    duration: 5000,
    distance: '90px'
})

// images

revealElement.reveal('.img-scroll-effect', {
    duration: 2000,
    distance: '90px'
})

revealElement.reveal('.img-scroll-effect-left', {
    duration: 2000,
    distance: '90px',
    origin: 'left'
})

revealElement.reveal('.img-scroll-effect-right', {
    duration: 2000,
    distance: '90px',
    origin: 'right'
})

// duration and possition txt

revealElement.reveal('.txt-scroll-effect-left', {
    duration: 2000,
    distance: '90px',
    origin: 'right'
})

revealElement.reveal('.txt-scroll-effect-right', {
    duration: 2000,
    distance: '90px',
    origin: 'left'
})
