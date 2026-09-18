/* =========================
   LOADING SCREEN
========================= */


window.addEventListener(
    "load",
    () => {


        setTimeout(
            () => {


                const loadingScreen =
                    document.getElementById(
                        "loadingScreen"
                    );


                loadingScreen.style.opacity =
                    "0";


                setTimeout(
                    () => {


                        loadingScreen.style.display =
                            "none";


                    },
                    1000
                );


            },
            2200
        );


    }
);


/* =========================
   NAVBAR
========================= */


window.addEventListener(
    "scroll",
    () => {


        const navbar =
            document.querySelector(
                ".navbar"
            );


        if (
            window.scrollY > 50
        ) {


            navbar.classList.add(
                "scrolled"
            );


        } else {


            navbar.classList.remove(
                "scrolled"
            );


        }


    }
);


/* =========================
   MUSIC
========================= */


const music =
    document.getElementById(
        "backgroundMusic"
    );


/* =========================
   PLAY FILM
========================= */


function playFilm() {


    music
        .play()
        .catch(
            () => {

                console.log(
                    "Music menunggu interaksi user."
                );

            }
        );


    const video =
        document.getElementById(
            "ourFilm"
        );


    document
        .getElementById(
            "videoModal"
        )
        .classList.add(
            "active"
        );


    video.play();


    document.body.style.overflow =
        "hidden";


}


/* =========================
   CLOSE VIDEO
========================= */


function closeVideo() {


    const video =
        document.getElementById(
            "ourFilm"
        );


    video.pause();


    document
        .getElementById(
            "videoModal"
        )
        .classList.remove(
            "active"
        );


    document.body.style.overflow =
        "auto";


}


/* =========================
   SCROLL ABOUT
========================= */


function scrollToAbout() {


    document
        .getElementById(
            "about"
        )
        .scrollIntoView(
            {
                behavior: "smooth"
            }
        );


}


/* =========================
   LETTER
========================= */


function openLetter() {


    document
        .getElementById(
            "letterModal"
        )
        .classList.add(
            "active"
        );


    document.body.style.overflow =
        "hidden";


}


function closeLetter() {


    document
        .getElementById(
            "letterModal"
        )
        .classList.remove(
            "active"
        );


    document.body.style.overflow =
        "auto";


}


/* =========================
   COUNTDOWN
========================= */


const anniversaryDate =
    new Date(
        "September 19, 2026 00:00:00"
    )
    .getTime();


function updateCountdown() {


    const now =
        new Date()
        .getTime();


    const distance =
        anniversaryDate -
        now;


    if (
        distance < 0
    ) {


        document
            .getElementById(
                "days"
            )
            .textContent =
            "000";


        document
            .getElementById(
                "hours"
            )
            .textContent =
            "00";


        document
            .getElementById(
                "minutes"
            )
            .textContent =
            "00";


        document
            .getElementById(
                "seconds"
            )
            .textContent =
            "00";


        return;


    }


    const days =
        Math.floor(
            distance /
            (
                1000 *
                60 *
                60 *
                24
            )
        );


    const hours =
        Math.floor(
            (
                distance %
                (
                    1000 *
                    60 *
                    60 *
                    24
                )
            )
            /
            (
                1000 *
                60 *
                60
            )
        );


    const minutes =
        Math.floor(
            (
                distance %
                (
                    1000 *
                    60 *
                    60
                )
            )
            /
            (
                1000 *
                60
            )
        );


    const seconds =
        Math.floor(
            (
                distance %
                (
                    1000 *
                    60
                )
            )
            /
            1000
        );


    document
        .getElementById(
            "days"
        )
        .textContent =
        String(
            days
        )
        .padStart(
            3,
            "0"
        );


    document
        .getElementById(
            "hours"
        )
        .textContent =
        String(
            hours
        )
        .padStart(
            2,
            "0"
        );


    document
        .getElementById(
            "minutes"
        )
        .textContent =
        String(
            minutes
        )
        .padStart(
            2,
            "0"
        );


    document
        .getElementById(
            "seconds"
        )
        .textContent =
        String(
            seconds
        )
        .padStart(
            2,
            "0"
        );


}


setInterval(
    updateCountdown,
    1000
);


updateCountdown();


/* =========================
   CLICK OUTSIDE MODAL
========================= */


window.addEventListener(
    "click",
    (event) => {


        const videoModal =
            document.getElementById(
                "videoModal"
            );


        const letterModal =
            document.getElementById(
                "letterModal"
            );


        if (
            event.target ===
            videoModal
        ) {


            closeVideo();


        }


        if (
            event.target ===
            letterModal
        ) {


            closeLetter();


        }


    }
);

function scrollToFilms() {

    document
        .getElementById("films")
        .scrollIntoView({
            behavior: "smooth"
        });

}
