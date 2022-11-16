function clickMe(x){
    x.style.background = "yellow"
    console.log("O botão foi clicado!")
}

function overMe(x){
    x.style.background = "yellow"
    console.log("Mouse está aqui!")
}

function focusMe(x){
    x.style.background = "yellow"
    console.log("Campo focado!")
}

function blurMe(x){
    x.style.background = "yellow"
    console.log("Campo fora de foco!")
}

function onChange(x){
    x.style.background = "yellow"
    console.log("Valor alterado!")
}

function resetAll(){
    console.log("Reset")
    
    for (i = 0; i < 5; i++){
        x = document.getElementsByClassName("reset")[i]
        x.style.background = "white"
    }
}

function mudar(){
    console.log("Clicado")
    nome = document.querySelector("#exemplo").innerText = "Mudou"
    
}