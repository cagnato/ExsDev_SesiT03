function soma() {
    var num1 = document.getElementById("num1").valueAsNumber;
    var num2 = document.getElementById("num2").valueAsNumber;
    
    var result = num1 + num2;
    document.getElementById("resultado").textContent = result;
}
function subtracao() {
    var num3 = document.getElementById("num3").valueAsNumber;
    var num4 = document.getElementById("num4").valueAsNumber;

    var result2 = num3 - num4;
    document.getElementById("resultado2").textContent = result2;
}
function divisao() {
    var num5 = document.getElementById("num5").valueAsNumber;
    var num6 = document.getElementById("num6").valueAsNumber;

    var result3 = num5 / num6;
    document.getElementById("resultado3").textContent = result3;
}
function multiplicacao() {
    var num7 = document.getElementById("num7").valueAsNumber;
    var num8 = document.getElementById("num8").valueAsNumber;

    var result4 = num7 * num8;
    document.getElementById("resultado4").textContent = result4;
}
function media() {
    var num10 = document.getElementById("num10").valueAsNumber;
    var num11 = document.getElementById("num11").valueAsNumber;
    var num12 = document.getElementById("num12").valueAsNumber;

    var somar = num10 + num11 + num12;
    var result5 = somar / 3;
    document.getElementById("resultado5").textContent = result5;
}