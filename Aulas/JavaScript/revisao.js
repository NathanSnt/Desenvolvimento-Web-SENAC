let div = document.querySelector("#div1")

function clicou() {
    div.innerHTML = "CLICOU AQUI"
    div.style.backgroundColor = 'yellow'
}

function saiu() {
    div.innerHTML = "MOUSE SAIU"
    div.style.backgroundColor = 'green'
}

function entrou() {
    div.innerHTML = "MOUSE ENTROU"
    div.style.backgroundColor = 'blue'
}