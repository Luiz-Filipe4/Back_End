//var
/* Explicação: Funciona globalmente é possivel declarar em qualquer lugar do codigo */


var exemplo1 = 10

var exemplo2 = 15

console.log (exemplo2)

console.log (typeof exemplo2)


var exemplo2 

/* ------------------------------------------------------------------------------------------------------------------------------*/

//let

/* Explicação: As variaveis let não podem ser usadas antes de ser declarada, pois seu escopo não permite serem elevadas ao topo */

let exemplo3 

exemplo3 = 30

console.log(exemplo3)

console.log(typeof exemplo2)

/* ------------------------------------------------------------------------------------------------------------------------------*/

//const

/* Explicação: As declarações const não podem ser restribuidas após a atribuição inicial e deve ser inicializada na mesma linha que foi declarada */

const status = "Aluno Aprovado!"

const nota1 = 7
const nota2 = 4

let aprovacao

if(status === "Aluno Aprovado!") {
    
    aprovacao = nota1 + nota2
    console.log("Parabens voce foi aprovado!")

}
/* comandos que iremos usar para subir nossos arquivos para o git 

1 - git add .: preparar todos os arquivos para o git.

2 - git status: verifica os status dos arquivos 

3 - git remote add origin: conecta o repositorio local do vs code com o git

*/