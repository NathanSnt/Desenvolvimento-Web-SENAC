// Declarando variáveis no typescript
let nome: String = "Nathan"
let idade: number = 22
let altura: number = 1.75
let temCachorro: boolean = false

// Criando um Array de string
let nomes: String[] = ['Morango', 'Pêssego', 'Caqui']
// Array de números
let numeros: number[] = [21, 52, 33, 43]

// Array de mais de uma tipo de dado
let nomeIdade: (String|number)[] = ['Nathan', 22, 'João', 17]

// Array para qualquer tipo de dado
let qualquer: any[] = [false, true, 1, 33, "Água"]

function firstLetterUpperCase (nome: String, age: number){
    let firstLetter = nome.toUpperCase()
    return firstLetter + nome
}