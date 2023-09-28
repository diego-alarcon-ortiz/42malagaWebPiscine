$(() => {
    let widthActual = 200;
    let heightActual = 200;
    let colorActual = 'red';

    $("#balloon").on("click", () => crecer());
    $("#balloon").on("mouseleave", () => decrecer());

    function crecer() {
        if (widthActual == 410 && heightActual == 410) {
            reestablecerCirculo();
        } else {
            widthActual += 10;
            heightActual += 10;
            $("#balloon").css({
                "background-color": siguienteColor(),
                "width": widthActual + "px",
                "height": heightActual + "px",
            })
        }
    }

    function decrecer() {
        if (widthActual > 200) {
            widthActual -= 5;
            heightActual -= 5;
            $("#balloon").css({
                "background-color": siguienteColorInverso(),
                "width": widthActual + "px",
                "height": heightActual + "px",
            })
        }
    }

    function siguienteColor() {
        if (colorActual == 'red') return colorActual = "green";
        if (colorActual == 'green') return colorActual = "blue";
        if (colorActual == 'blue') return colorActual = "red";
    }

    function siguienteColorInverso() {
        if (colorActual == 'red') return colorActual = "blue";
        if (colorActual == 'blue') return colorActual = "green";
        if (colorActual == 'green') return colorActual = "red";
    }

    function reestablecerCirculo() {
        widthActual = 200;
        heightActual = 200;
        $("#balloon").css({
            "background-color": "red",
            "width": widthActual + "px",
            "height": heightActual + "px",
        })
    }

})
