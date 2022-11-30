function somar(){
    let n1 = document.querySelector("#n1").value
    let n2 = document.querySelector("#n2").value
    let resultado = document.querySelector("#resultado")
    resultado.innerHTML = parseInt(n1) + parseInt(n2)
}

function subtrair(){
    let n1 = document.querySelector("#n1").value
    let n2 = document.querySelector("#n2").value
    let resultado = document.querySelector("#resultado")
    resultado.innerHTML = parseInt(n1) - parseInt(n2)
}

function dividir(){
    let n1 = document.querySelector("#n1").value
    let n2 = document.querySelector("#n2").value
    let resultado = document.querySelector("#resultado")
    resultado.innerHTML = parseInt(n1) / parseInt(n2)
}

function multiplicar(){
    let n1 = document.querySelector("#n1").value
    let n2 = document.querySelector("#n2").value
    let resultado = document.querySelector("#resultado")
    resultado.innerHTML = parseInt(n1) * parseInt(n2)
}