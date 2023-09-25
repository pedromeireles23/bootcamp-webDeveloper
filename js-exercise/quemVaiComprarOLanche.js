// Who's Buying Lunch? Code Challenge
// You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.

// Important: The output should e returned from the function and you do not need alert, prompt or console.log. The output should match the example output exactly, including capitalisation and punctuation.

// Example Input

// ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
// Example Output

// Michael is going to buy lunch today!

var nomes = ["Angela", "Pedro", "Matheus", "Chloe", "Thiago"]

function whosPaying(names){


var numeroDePessoas = names.length
var numeroAleatorio = Math.floor(Math.random()*numeroDePessoas);
var pessoaAleatoria = names[numeroAleatorio];
console.log( pessoaAleatoria + "irá comprar o lanche amanhã");



}

whosPaying(nomes);


// Primeiramente criamos uma função que deva ser capaz de escolher
// um nome aleatório dentro de um array e deve retornar esse resultado

// Para isso criamos uma variável para receber o tamanhado deste array
// Para poder pegar uma posição aleatória deste array  utilizamos a função
// Math.random que daria um valor entre 0 e 1 e multiplicamos este valor pelo tamanho do array
// utilizamos da função Math.floor para retirar as casas decimais 
// isso para caber no array incluindo o 0..
// criamos um váriavel para receber o valor da posição aleatório do array
// e depois é só retornar.