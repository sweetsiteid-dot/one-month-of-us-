/* =========================
   ELEMENTS
========================= */

const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const memoryBtn = document.getElementById("memoryBtn");

const heartsContainer = document.querySelector(".hearts");

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");


/* =========================
   OPEN WEBSITE
========================= */

openBtn.addEventListener("click", async () => {

    /* PLAY BEAUTIFUL.MP3 */

    try {
        await music.play();
        musicBtn.innerHTML = "⏸ Pause Music";
    } catch (error) {
        console.log("Music needs user interaction.");
    }


    /* =========================
       LOVE + STAR FALLING
    ========================= */

    const icons = [
        "🤍",
        "♡",
        "✨",
        "⭐"
    ];

    for(let i = 0; i < 80; i++){

        const item = document.createElement("div");

        item.innerHTML =
            icons[Math.floor(Math.random() * icons.length)];

        item.classList.add("falling");

        item.style.left =
            Math.random() * 100 + "vw";

        item.style.fontSize =
            (Math.random() * 20 + 18) + "px";

        item.style.animationDuration =
            (Math.random() * 2 + 2) + "s";

        item.style.animationDelay =
            Math.random() * 1.5 + "s";

        document.body.appendChild(item);


        setTimeout(() => {
            item.remove();
        }, 5000);

    }


    /* =========================
       OPENING TRANSITION
    ========================= */

    setTimeout(() => {

        opening.style.opacity = "0";
        opening.style.transition = "opacity 1s ease";

        setTimeout(() => {

            opening.style.display = "none";

            mainContent.style.display = "block";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 1000);

    }, 1800);

});


/* =========================
   MEMORY BUTTON
========================= */

memoryBtn.addEventListener("click", () => {

    document.getElementById("memories")
        .scrollIntoView({
            behavior: "smooth"
        });

});


/* =========================
   MUSIC BUTTON
========================= */

musicBtn.addEventListener("click", async () => {

    if(music.paused){

        try{

            await music.play();

            musicBtn.innerHTML =
                "⏸ Pause Music";

        }catch(error){

            console.log("Unable to play music.");

        }

    }else{

        music.pause();

        musicBtn.innerHTML =
            "🎵 Play Music";

    }

});


/* =========================
   AUTO SLIDER
========================= */

let currentSlide = 0;

function showSlide(index){

    slides.forEach((slide) => {

        slide.classList.remove("active");

    });

    dots.forEach((dot) => {

        dot.classList.remove("active");

    });


    if(slides[index]){

        slides[index].classList.add("active");

    }

    if(dots[index]){

        dots[index].classList.add("active");

    }

}


/* CHANGE PHOTO EVERY 4 SECONDS */

setInterval(() => {

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}, 4000);


/* =========================
   DOT CLICK
========================= */

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        currentSlide = index;

        showSlide(currentSlide);

    });

});


/* =========================
   FLOATING HEARTS
========================= */

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");


    const icons = [
        "🤍",
        "♡",
        "♥",
        "✦"
    ];

    heart.innerHTML =
        icons[Math.floor(Math.random() * icons.length)];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (Math.random() * 18 + 16) + "px";


    heart.style.animationDuration =
        (Math.random() * 5 + 8) + "s";


    heart.style.animationDelay =
        Math.random() * 2 + "s";


    heartsContainer.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 15000);

}


/* CREATE HEARTS */

setInterval(createHeart, 900);


/* =========================
   INITIAL
========================= */

showSlide(0);
