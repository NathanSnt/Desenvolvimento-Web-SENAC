function calcular(){
    let n1 = document.querySelector("#n1").value
    let n2 = document.querySelector("#n2").value
    let resultado = document.querySelector("#resultado")

    resultado.innerHTML = parseInt(n1) + parseInt(n2)
}