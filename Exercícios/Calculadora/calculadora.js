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

let paragrafo = document.createElement('p')
paragrafo.innerText = 'Segunda tem jogo'
document.body.appendChild(paragrafo)

function addFormat(){
    // document.querySelector("#minhaDiv").classList.add('classe1', 'classe2', 'classe3')
    document.querySelector("#minhaDiv").classList.add('classe1', 'classe3', 'classe2')
}

function remFormat(){
    // document.querySelector("#minhaDiv").classList.add('classe1', 'classe2', 'classe3')
    document.querySelector("#minhaDiv").classList.remove('classe1', 'classe3', 'classe2')
}