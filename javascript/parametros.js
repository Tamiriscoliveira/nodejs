//parametros de função

function soma(numero1, numero2){
    return numero1 + numero2
}

console.log(soma(2,2))
console.log(soma(245,20))
console.log(soma(-500,60))

//parametros x argumetos

// ordem dos parâmetros

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade(34, "Tamiris"));


function multiplica(numero1 =1, numero2 = 1){
    return numero1 * numero2;
}

console.log(multiplica(soma(4,5)))


function comParametro(param) {
    console.log(param)
}
comParametro()
// Alternativa correta! Certo! Em JavaScript, os parâmetros de 
// funções tem undefined como valor predefinido.


