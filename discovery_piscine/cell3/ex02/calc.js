window.onload = () => {
    document.querySelector("button").onclick = () => {
        let texto1 = document.querySelectorAll("input")[0].value;
        let texto2 = document.querySelectorAll("input")[1].value;
        let operador = document.querySelector("select").value;
    
        if ((operador == "/" || operador == "%") && parseInt(texto2) == 0) {
            document.querySelector("#res").textContent = ("Cannot divide by 0")
        } else if (isNaN(texto1) || isNaN(texto2) || texto1 == "" || texto2 == "") {
            document.querySelector("#res").textContent = ("Error: Both fields must contain a number")
        } else {
            document.querySelector("#res").textContent = ("The result is: " + eval(texto1 + operador + texto2));
        }
    }
}