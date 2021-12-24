//tipo de dados e como trabalhamos com os booleanos

// conversao implicita permite converter um tipo de dado em outro

const numero = 456;
const numeroString = "456";
// const numeroString = Number("456");



console.log(numero === numeroString)
console.log(numero == numeroString) //converte tipo de dado
console.log(numero + numeroString) // ele concatena

// conversão explicita
//Funções para conversão
//Number()
//String()
console.log(numero + Number(numeroString))

