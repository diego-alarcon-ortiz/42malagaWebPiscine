window.onload = () => {
    let widthActual = 200;
    let heightActual = 200;
    let balloon = document.getElementById("balloon");
    let colorActual = 'red';
    balloon.style.backgroundColor = colorActual;

    balloon.onclick = () => crecer();
    balloon.onmouseout = () => decrecer();

    function crecer() {
        if (widthActual == 410 && heightActual == 410) {
            reestablecerCirculo();
        } else {
            widthActual = widthActual + 10;
            heightActual += 10;
            balloon.style.backgroundColor = siguienteColor();
            balloon.style.width = widthActual + 'px';
            balloon.style.height = heightActual + 'px';
        }
    }

    function decrecer() {
        if (widthActual > 200) {
            widthActual -= 5;
            heightActual -= 5;
            balloon.style.backgroundColor = siguienteColorInverso();
            balloon.style.width = widthActual + 'px';
            balloon.style.height = heightActual + 'px';
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
        balloon.style.backgroundColor = 'red';
        balloon.style.width = widthActual + 'px';
        balloon.style.height = heightActual + 'px';
    }
}