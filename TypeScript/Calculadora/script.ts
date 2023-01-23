let num1 = document.getElementById("numero-1") as HTMLInputElement
let num2 = document.getElementById("numero-2") as HTMLInputElement
let btn  = document.getElementById("calcular") as HTMLInputElement
let res = document.getElementById("resultado") as HTMLInputElement

function calcular(n1, n2){
    return n1 + n2
}

btn.addEventListener('click', function(){
    res.innerHTML = calcular(num1.value, num2.value)
})
