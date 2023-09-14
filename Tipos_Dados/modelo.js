const media = 7


const nota = 4

if(nota >= media){

    console.log("Aluno aprovado!!")

} else {
    console.log("Aluno reprovado!")

}

//Operador ternario

        //condição      //true      //false
console.log(nota >= media ? "Aluno aprovado!" : "Aluno reprovado!")

/* ----------------------------------------------------------------------------------------------------------------------------- */

//Template String

const nome = "Bruno Gomes"

const cargo = "Desenvolvimento"

const empresa = "SENAI"

const idade = 2023-2005


//concatenação
console.log("Me chamo, "+nome+", sou "+cargo+", e trabalho na empresa"+empresa+" e tem"+idade+" anos.")


//Template String
console.log(`Me chamo ${nome}, sou ${cargo}, e trabalho na empresa ${empresa}, tenho ${idade} anos`)