$(() => {
    $("body").append($("<h1 id='mainTitle'>Curriculum Vitae</h1>"));
    let balloonInterval = setInterval(() => {
        let balloon = $("<div id='balloon'></div>");
        $("body").append(balloon);
        $("#balloon").animate({
            width: "40em",
            height: "40em",
            opacity: "0",
        }, "slow")
        setInterval(() => balloon.remove(), 1900);
    }, 2000);

    $("#mainTitle").on("click", () => {
        $("#mainTitle").off("click");
        clearInterval(balloonInterval);
        $("#mainTitle").animate({opacity: '0'})
        document.body.style.animation = "gradient 2s ease forwards";
        setTimeout(() => {
            $("#mainTitle").remove();
            $("body").css("flex-direction", "column");
            let links = $(
                    "<div class='links' id='link1'>" +
                        "<p class='pars' id='par1'>Diego Alarcón Ortiz</p>" +
                    "</div>" +
                    "<div class='links' id='link2'>" +
                        "<p class='pars' id='par2'>Carmen Castillo Gaitán</p>" +
                    "</div>"
            );
            $("body").append(links);
            $(".links").fadeIn(1000);

            $(".links").on("click", (e) => {
                $(".links").off("click");
                $(".links").fadeOut(1000);
                setTimeout(() => $(".links").remove(), 1000);
                if (e.target.id == "link1" || e.target.id == "par1") {
                    setTimeout(() => renderMain("Diego Alarcón Ortiz", "diego"), 1000);
                } else {
                    setTimeout(() => renderMain("Carmen Castillo Gaitán", "carmen"), 1000);
                }
            })

            setTimeout(() => {
               $(".links").css("display", "flex");
               $(".pars").fadeIn(1500);
            }, 1000)
        }, 1200);
    })
})

// FUNCTIONS USED

function renderMain(name, img) {
    renderNavBar();
    renderAboutMe(name, img);
}

function renderNavBar() {
    let navBar = $(
        "<nav id='navBar'>" +
            `<p id="menu">Menu</p>` +
            `<p class="navOptions" id="aboutme">About me</p>` +
            `<p class="navOptions" id="skills">Skills</p>` +
            `<p class="navOptions" id="contact">Contact</p>` +
        "</nav>"
    );
    $("body").append(navBar);
    $(".navOptions").hide();
    $("#navBar").css("display", "flex");
    $("#navBar").hide();
    $("#navBar").fadeIn(2000);
    setTimeout(() => {
        $("#navBar").on("mouseenter", () => showNav());
    }, 2000);
}

function showNav() {
    $("#navBar").off("mouseenter");
    $("#navBar").animate({width: '70%'}, "slow");
    $("#menu").fadeOut(500);
    setTimeout(() => {
        $(".navOptions").fadeIn(500);
        $("#navBar").on("mouseleave", () => hideNav());
    }, 500);
}

function hideNav() {
    $("#navBar").off("mouseleave");
    $("#navBar").animate({width: '8rem'}, "slow");
    $(".navOptions").fadeOut(500);
    setTimeout(() => {
        $("#menu").fadeIn(500);
        $("#navBar").on("mouseenter", () => showNav());
    }, 500)
}

function renderAboutMe(name, img) {
    let about = $(
        "<section id='about'>" +
            `<h1 class="name">${name}</h1>` +
            `<img class="img" src="./media/${img}.png">` +
            `<p class="description">Web Developer and 42 Málaga Student</p>` +
        "</section>"
    );
    $("body").append(about);
    $(".name, .img, .description").hide();
    setTimeout(() => $(".name, .img, .description").fadeIn(1200), 1200);
    $("#aboutme").off("click");
    $("#skills").on("click", () => {
        $("#about").remove();
        renderSkills(name, img);
    })
    $("#contact").on("click", () => {
        $("#about").remove();
        renderContact(name, img);
    })
}

function renderSkills(name, img) {
    let skills;

    if (name == "Diego Alarcón Ortiz") {
        skills = $(
            "<section id='about'>" +
                `<h1 class="name">Skills</h1>` +
                `<p class="description">Main technologies</p>` +
                `<p class="description">HTML, CSS, JavaScript and ReactJS</p>` +
                `<p class="description">Knowledge about</p>` +
                `<p class="description">Java, Jquery, Bootstrap, Sass, SQL, C and Git</p>` +
                `<p class="description">Softskills</p>` +
                `<p class="description">Teamwork, communication, problem-solving and stress management</p>` +
            "</section>"
        );
    } else {
        skills = $(
            "<section id='about'>" +
                `<h1 class="name">Skills</h1>` +
                `<p class="description">Main technologies</p>` +
                `<p class="description">HTML, CSS, JavaScript</p>` +
                `<p class="description">Knowledge about</p>` +
                `<p class="description">Jquery, SQL, C, Git and Blender</p>` +
                `<p class="description">Softskills</p>` +
                `<p class="description">Teamwork, communication, problem-solving and leadership</p>` +
            "</section>"
        );
    }
    $("body").append(skills);
    $(".name, .img, .description").hide();
    setTimeout(() => $(".name, .img, .description").fadeIn(1200), 1200);
    $("#skills").off("click");
    $("#aboutme").on("click", () => {
        $("#about").remove();
        renderAboutMe(name, img);
    })
    $("#contact").on("click", () => {
        $("#about").remove();
        renderContact(name, img);
    })
}

function renderContact(name, img) {
    let contact;

    if (name == "Diego Alarcón Ortiz") {
        contact = $(
            "<section id='about'>" +
                `<h1 class="name">${name}</h1>` +
                `<p class="description">Email</p>` +
                `<p class="description">diegoalarcondeveloper@gmail.com</p>` +
                `<p class="description">LinkedIn</p>` +
                `<p class="description">linkedin.com/in/diego-alarcon-ortiz</p>` +
            "</section>"
        );
    } else {
        contact = $(
            "<section id='about'>" +
                `<h1 class="name">${name}</h1>` +
                `<p class="description">Email</p>` +
                `<p class="description">ccastillogaitan12@gmail.com</p>` +
                `<p class="description">LinkedIn</p>` +
                `<p class="description">linkedin.com/in/carmen-castillo-gaitan</p>` +
            "</section>"
        );
    }

    $("body").append(contact);
    $(".name, .img, .description").hide();
    setTimeout(() => $(".name, .img, .description").fadeIn(1200), 1200);
    $("#contact").off("click");
    $("#aboutme").on("click", () => {
        $("#about").remove();
        renderAboutMe(name, img);
    })
    $("#skills").on("click", () => {
        $("#about").remove();
        renderSkills(name, img);
    })
}
