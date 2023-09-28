$(() => $("#boton").on("click", () => cambiarColor()))

function cambiarColor() {
    let caracteres = "0123456789ABCDEF";
    let almohadilla = "#";

    for (let i = 0; i < 6; i++)
        almohadilla += caracteres[Math.floor(Math.random()*16)];

    $("body").css("background-color", almohadilla);
}