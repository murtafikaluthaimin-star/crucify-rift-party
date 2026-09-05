// ============================================================
// CRUCIFY RIFT PARTY
// SCRIPT.JS
// ============================================================


// ============================================================
// THEME BUTTON
// ============================================================

const themeButton =
    document.getElementById("themeButton");

const body =
    document.body;


// ============================================================
// LOAD THEME
// ============================================================

const savedTheme =
    localStorage.getItem("crucify-theme");


if (savedTheme === "day") {

    body.classList.add("day-mode");

    themeButton.textContent = "🌙";

} else {

    themeButton.textContent = "☀️";

}


// ============================================================
// THEME CHANGE
// ============================================================

themeButton.addEventListener(
    "click",
    function () {

        body.classList.toggle("day-mode");

        const isDay =
            body.classList.contains("day-mode");


        if (isDay) {

            themeButton.textContent = "🌙";

            localStorage.setItem(
                "crucify-theme",
                "day"
            );

        } else {

            themeButton.textContent = "☀️";

            localStorage.setItem(
                "crucify-theme",
                "night"
            );

        }

    }
);


// ============================================================
// RIFT CLICK EFFECT
// ============================================================

function createRiftClickEffect(x, y) {

    const effect =
        document.createElement("div");

    effect.className =
        "rift-click-effect";


    effect.style.left =
        x + "px";

    effect.style.top =
        y + "px";


    document.body.appendChild(
        effect
    );


    setTimeout(
        function () {

            effect.remove();

        },
        800
    );

}


// ============================================================
// FLASH EFFECT
// ============================================================

function createFlashEffect() {

    const flash =
        document.createElement("div");

    flash.className =
        "screen-flash";


    document.body.appendChild(
        flash
    );


    setTimeout(
        function () {

            flash.remove();

        },
        300
    );

}


// ============================================================
// PARTICLE EFFECT
// ============================================================

function createClickParticles(x, y) {

    const particleCount = 14;


    for (
        let i = 0;
        i < particleCount;
        i++
    ) {

        const particle =
            document.createElement("div");


        particle.className =
            "click-particle";


        particle.style.left =
            x + "px";

        particle.style.top =
            y + "px";


        const angle =
            Math.random()
            * Math.PI
            * 2;


        const distance =
            40
            + Math.random()
            * 90;


        const moveX =
            Math.cos(angle)
            * distance;


        const moveY =
            Math.sin(angle)
            * distance;


        particle.style.setProperty(
            "--move-x",
            moveX + "px"
        );


        particle.style.setProperty(
            "--move-y",
            moveY + "px"
        );


        document.body.appendChild(
            particle
        );


        setTimeout(
            function () {

                particle.remove();

            },
            700
        );

    }

}


// ============================================================
// CLICK ANIMATION UNTUK SEMUA ELEMEN
// ============================================================

document.addEventListener(
    "click",
    function (event) {

        const x =
            event.clientX;

        const y =
            event.clientY;


        createRiftClickEffect(
            x,
            y
        );


        createClickParticles(
            x,
            y
        );


        createFlashEffect();

    }
);


// ============================================================
// BUTTON PRESS EFFECT
// ============================================================

const buttons =
    document.querySelectorAll(
        "button, .button, .rift-card, .footer-social a, .navigation a"
    );


buttons.forEach(
    function (button) {

        button.addEventListener(
            "mousedown",
            function () {

                button.classList.add(
                    "clicking"
                );

            }
        );


        button.addEventListener(
            "mouseup",
            function () {

                button.classList.remove(
                    "clicking"
                );

            }
        );


        button.addEventListener(
            "mouseleave",
            function () {

                button.classList.remove(
                    "clicking"
                );

            }
        );

    }
);


// ============================================================
// SOCIAL CARD
// ============================================================

const socialCards =
    document.querySelectorAll(
        ".rift-card"
    );


socialCards.forEach(
    function (card) {

        card.addEventListener(
            "click",
            function (event) {

                const platform =
                    card.dataset.platform;


                if (
                    card.getAttribute("href")
                    === "#"
                ) {

                    event.preventDefault();


                    setTimeout(
                        function () {

                            alert(
                                "⚡ " +
                                platform +
                                " RIFT ⚡\n\n" +

                                "Link " +
                                platform +
                                " belum diatur.\n\n" +

                                "Buka index.html lalu " +

                                "ganti href=\"#\" dengan " +

                                "link " +
                                platform +
                                " kamu."
                            );

                        },
                        350
                    );

                }

            }
        );

    }
);


// ============================================================
// SMOOTH SCROLL
// ============================================================

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetID =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        targetID === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetID
                        );


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView({
                            behavior:
                                "smooth"
                        });

                    }

                }
            );

        }
    );


// ============================================================
// RIFT ONLINE ANIMATION
// ============================================================

const statusDot =
    document.querySelector(
        ".status-dot"
    );


setInterval(
    function () {

        if (!statusDot) {

            return;

        }


        statusDot.style.boxShadow =
            "0 0 25px var(--accent)";


        setTimeout(
            function () {

                statusDot.style.boxShadow =
                    "0 0 8px var(--accent)";

            },
            400
        );

    },
    1800
);


// ============================================================
// MOUSE MOVE GLOW
// ============================================================

let mouseX = 0;
let mouseY = 0;


document.addEventListener(
    "mousemove",
    function (event) {

        mouseX =
            event.clientX;

        mouseY =
            event.clientY;


        document.documentElement.style.setProperty(
            "--mouse-x",
            mouseX + "px"
        );


        document.documentElement.style.setProperty(
            "--mouse-y",
            mouseY + "px"
        );

    }
);


// ============================================================
// CONSOLE
// ============================================================

console.log(
    "✦ CRUCIFY RIFT PARTY"
);

console.log(
    "Rift System: ONLINE"
);

console.log(
    "Warper System: ACTIVE"
);

console.log(
    "Interactive Rift Effects: ONLINE"
);