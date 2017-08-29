// Rectifies the issue of the nav-bar not taking its proper place on screen when the window is resized on a browser
window.onresize = function() {
    location.reload();
};

// Functions for the interactive Nav-Bar. Duplicated variables to avoid declaring globals.
// Tried other variations to declare variables first and then have the seperate methods work from that, but they failed.
// Not ideal duplicating code like this, but this is what worked, so it's better to use something that actually performs correctly
function expandNav() {
    var nav = document.getElementById("myNav");
    var body = document.body;
    var logo = document.getElementById("logo");
    var panHead = document.getElementsByClassName("panel-heading");
    var panBody = document.getElementsByClassName("panel-body");
    var reg = document.getElementById("regForm");
    var field = document.getElementsByTagName("input");
    var selection = document.getElementsByTagName("select");
    var z, y, x, v;

    if ($(window).width() >= 992) {
        nav.style.left = "0";
        body.style.background = "rgb(153,153,153)";
        logo.src = "pics/ReLife_logo2.jpg";

        // Included if statements due to clashes when trying to execute the code while not on the page that contained the affected classes
        if (window.location.pathname == "/faq") {

            for (z = 0; z < panHead.length; z++) {
                panHead[z].style.backgroundColor = "rgb(153,153,153)";
            }

            for (y = 0; y < panBody.length; y++) {
                panBody[y].style.backgroundColor = "rgb(153,153,153)";
            }
        }

        if (window.location.pathname == "/register") {
            reg.style.backgroundColor = "rgb(153,153,153)";

            for (x = 0; x < field.length; x++) {
                field[x].style.backgroundColor = "rgb(153,153,153)";
            }

            for (v = 0; v < selection.length; v++) {
                selection[v].style.backgroundColor = "rgb(153,153,153)";
            }
        }
    }
}

function contractNav() {
    var nav = document.getElementById("myNav");
    var body = document.body;
    var logo = document.getElementById("logo");
    var panHead = document.getElementsByClassName("panel-heading");
    var panBody = document.getElementsByClassName("panel-body");
    var reg = document.getElementById("regForm");
    var field = document.getElementsByTagName("input");
    var selection = document.getElementsByTagName("select");
    var z, y, x, v;

    if ($(window).width() >= 992) {
        nav.style.left = "-175px";
        body.style.background = "linear-gradient(to bottom, rgba(155,235,255,0) 20%, rgba(155,235,255,1))";
        logo.src = "pics/ReLife_logo.jpg";

        if (window.location.pathname == "faq") {

            for (z = 0; z < panHead.length; z++) {
                panHead[z].style.backgroundColor = "#f5f5f5";
            }

            for (y = 0; y < panBody.length; y++) {
                panBody[y].style.backgroundColor = "#fff";
            }
        }

        if (window.location.pathname == "register") {
            reg.style.backgroundColor = "#fff";

            for (x = 0; x < field.length; x++) {
                field[x].style.backgroundColor = "#fff";
            }

            for (v = 0; v < selection.length; v++) {
                selection[v].style.backgroundColor = "#fff";
            }
        }
    }
}

// The toggle function for touch screens that replaces the animated mouseover version for desktop
function toggleNav() {
    var nav = document.getElementById("myNav");
    var body = document.body;
    var logo = document.getElementById("logo");
    var panHead = document.getElementsByClassName("panel-heading");
    var panBody = document.getElementsByClassName("panel-body");
    var reg = document.getElementById("regForm");
    var field = document.getElementsByTagName("input");
    var selection = document.getElementsByTagName("select");
    var z, y, x, v;

    if ($(window).width() < 992) {
        if (nav.style.left == "-125px") {
            nav.style.left = "0";
            body.style.background = "rgb(153,153,153)";
            logo.src = "pics/ReLife_logo2.jpg";

            if (window.location.pathname == "faq") {

                for (z = 0; z < panHead.length; z++) {
                    panHead[z].style.backgroundColor = "rgb(153,153,153)";
                }

                for (y = 0; y < panBody.length; y++) {
                    panBody[y].style.backgroundColor = "rgb(153,153,153)";
                }
            }

            if (window.location.pathname == "register") {
                reg.style.backgroundColor = "rgb(153,153,153)";

                for (x = 0; x < field.length; x++) {
                    field[x].style.backgroundColor = "rgb(153,153,153)";
                }

                for (v = 0; v < selection.length; v++) {
                    selection[v].style.backgroundColor = "rgb(153,153,153)";
                }
            }

        } else {
            nav.style.left = "-125px";
            body.style.background = "linear-gradient(to bottom, rgba(155,235,255,0) 20%, rgba(155,235,255,1))";
            logo.src = "pics/ReLife_logo.jpg";

            if (window.location.pathname == "faq") {

                for (z = 0; z < panHead.length; z++) {
                    panHead[z].style.backgroundColor = "#f5f5f5";
                }

                for (y = 0; y < panBody.length; y++) {
                    panBody[y].style.backgroundColor = "#fff";
                }
            }

            if (window.location.pathname == "register") {
                reg.style.backgroundColor = "#fff";

                for (x = 0; x < field.length; x++) {
                    field[x].style.backgroundColor = "#fff";
                }

                for (v = 0; v < selection.length; v++) {
                    selection[v].style.backgroundColor = "#fff";
                }
            }
        }
    }
}

function closeModal() {
    setTimeout(function() {
        $("#myModal").modal("hide");
        $("body").removeClass("modal-open");
        $(".modal-backdrop").remove();
    }, 5000);
}
