function calcular(){
    let nome = document.querySelector("#nome").value
    let altura = parseFloat(document.querySelector("#altura").value)
    let peso = parseFloat(document.querySelector("#peso").value)

    if(nome !== '' && altura >= 0 && peso >= 0){
        let imc = (peso / (altura * altura) * 10000).toFixed(2)
        
        let condicao = ""
    
        if (imc < 18.5){
            condicao = 'Abaixo do peso normal'
        }
        else if(imc >= 18.5 && imc < 25){
            condicao = 'Peso normal'
        }
        else if(imc >= 25 && imc < 30){
            condicao = 'Excesso de peso'
        }
        else if(imc >= 30 && imc < 35){
            condicao = 'Obesidade de classe I'
        }
        else if(imc >= 35 && imc < 40){
            condicao = 'Obesidade de classe II'
        }
        else if(imc >= 40){
            condicao = 'Obesidade de classe III'
        }
        document.querySelector("#resultado").innerHTML = `<strong>${nome}</strong><br>Seu IMC é de: <strong>${imc}</strong><br>Classificado como: <strong>${condicao}</strong>`
    }
    else {
        document.querySelector("#resultado").innerHTML = "ERRO"
    }
    // alert(`${nome}\nSeu IMC é de: ${imc}\nClassificado como: ${condicao}`)
}
