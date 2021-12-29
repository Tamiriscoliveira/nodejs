const minhaVar = 1;
const MinhaVar = "texto";
const minhavar = "3";
const MINHAVAR = 2;

console.log(minhaVar, MinhaVar, minhaVar, MINHAVAR)

// null é um tipo especial, quer dizer "ausência de valor" e pode ser
//atribuido como um valor de uma variável:

let input = null;

if (input === null){
    console.log('não há informação');
    }else{
        console.log(input);
    }

let input2;

console.log(input); // null
console.log(input2); // undefined 
 
//um outro tipo undefined, este tipo também representa "ausência de valor"
// porém de uma outra forma: enquanto null é um valor atribuido a uma
//variavel que existe e foi iniciada, undefined se refere ao valor
// de uma variavel que não foi inicialzada(ou seja, não foi atrinuido nenhum valor a ela)

//undefined também é o valor retornado por uma função que não tem cláusula return. Veremos mais sobre funções e return mais adiante no curso.

