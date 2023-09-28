$(() => {
    $("button").on("click", () => {
        let n1 = $("#firstNumber").val();
        let n2 = $("#secondNumber").val();
        let operador = $("select").val();
    
        if ((operador == "/" || operador == "%") && parseInt(n2) == 0)
            $("#res").text("Cannot divide by 0")
        else if (isNaN(n1) || isNaN(n2) || n1 == "" || n2 == "")
            $("#res").text("Error: Both fields must contain a number")
        else
            $("#res").text("The result is: " + eval(n1 + operador + n2));
    })
})