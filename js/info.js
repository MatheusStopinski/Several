
/*

 anotações:
 
Declaração de variáveis: var, let e const.
Estruturas condicionais: if, else if, else, switch e case.
Loops: for, while, do...while.
Funções: function.
Eventos: addEventListener.
Tratamento de exceções: try, catch, finally.
Operadores aritméticos: +, -, *, /, %.
Operadores de comparação: ==, !=, ===, !==, >, <, >=, <=.
Operadores lógicos: && (and), || (or), ! (not).
Métodos de manipulação de strings: concat, indexOf, slice, substring, replace, split, etc.
Métodos de manipulação de arrays: push, pop, shift, unshift, slice, splice, etc.
Métodos para trabalhar com datas e horas: Date.

Declaração de variáveis: var, let e const

// Usando 'var'
var nome = 'Matheus';
var idade = 31;
nome = 'Meu Bom'; // Variável pode ser reatribuída

// Usando 'let'
let cidade = 'Curitiba';
let bairro = Tingui;
cidade = 'Vancouver'; // Variável pode ser reatribuída

// Usando 'const'
const salario = 314,159.00;
const profissao = 'Engenheiro de Software';
salario = 43,145.00; // Esse exemplo serve para mostrar que isso causaria um erro, pois uma constante não pode ser reatribuída, ainda mais esse valor. Sim para o amor nada tem preço bora se esforça meu bom.


Estruturas condicionais: if, else if, else, switch e case

const idade = 18;

if (idade < 18) {
  console.log('Você é menor de idade.');
} else if (idade === 18) {
  console.log('Você tem 18 anos.');
} else {
  console.log('Você é maior de idade.');
}


const diaSemana = 'domingo';

switch (diaSemana) {
  case 'segunda':
  case 'terça':
  case 'quarta':
  case 'quinta':
  case 'sexta':
    console.log('Dia útil');
    break;
  case 'sábado':
  case 'domingo':
    console.log('Fim de semana');
    break;
  default:
    console.log('Dia inválido');
    break;
}  // SINCERAMENTE! GOSTEI MUITO DESSE. 


Loops: for, while, do...while

// Usando 'for'
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Usando 'while'
let contador = 0;
while (contador < 5) {
  console.log(contador);
  contador++; 
} 

// Usando 'do...while' GOSTEI DESSE OU DO FOR!
let numero = 1;
do {
  console.log(numero);
  numero++;
} while (numero <= 5);


Funções: function

function saudacao(nome) {
  console.log('Oi, ' + nome + '!');
}
saudacao('Theus'); // Saída: Oi, Theus!



Eventos: addEventListener
html
<button id="btn">Clique aqui</button>

<script>
  function handleClick() {
    console.log('Botão clicado!');
  }
  const botao = document.getElementById('btn');
  botao.addEventListener('click', handleClick);
</script>



Tratamento de exceções: try, catch, finally

function dividir(a, b) {
  try {
    if (b === 0) {
      throw new Error('Divisão por zero não é permitida.');
    }
    return a / b;
  } catch (error) {
    console.log(error.message);
    return 0;
  } finally {
    console.log('Operação concluída.');
  }
}
console.log(dividir(10, 2)); // Saída: 5
console.log(dividir(5, 0)); // Saída: Divisão por zero não é permitida. Operação concluída. 0


*Operadores aritméticos: +, -, , /, %

const numero1 = 10;
const numero2 = 5;

const soma = numero1 + numero2;
const subtracao = numero1 - numero2;
const multiplicacao = numero1 * numero2;
const divisao = numero1 / numero2;
const resto = numero1 % numero2;

console.log(soma); // Saída: 15
console.log(subtracao); // Saída: 5
console.log(multiplicacao); // Saída: 50
console.log(divisao); // Saída: 2
console.log(resto); // Saída: 0


Operadores de comparação: ==, !=, ===, !==, >, <, >=, <=

const valor1 = 10;
const valor2 = '10';

console.log(valor1 == valor2); // Comparação de valor - true
console.log(valor1 === valor2); // Comparação de valor e tipo - false
console.log(valor1 != valor2); // Comparação de valor - false
console.log(valor1 !== valor2); // Comparação de valor e tipo - true

console.log(valor1 > valor2); // false 
console.log(valor1 < valor2); // false
console.log(valor1 >= valor2); // true
console.log(valor1 <= valor2); // true


Operadores lógicos: && (and), || (or), ! (not)

const idade = 31;
const possuiCarteira = true;

if (idade >= 18 && possuiCarteira) {
  console.log('Pode dirigir');
} else {
  console.log('Curta sua juventude, mas sem dirigir');
}


const diaSemana = 'sábado';

if (diaSemana === 'sábado' || diaSemana === 'domingo') {
  console.log('É fim de semana');
} else {
  console.log('É dia útil');
}


const chove = false;

if (!chove) {
  console.log('Não chove');
} else {
  console.log('chove');
}


Métodos de manipulação de strings:
concat, indexOf, slice, substring, replace, split, etc.

const frase = 'Olá, meu bom!';
const novaFrase = frase.concat(' Como você está?');
console.log(novaFrase); // Saída: Olá, meu bom! Como você está?


const frase = 'Olá, meu bom!';
const index = frase.indexOf('bom');
console.log(index); // Saída: 9 ( conta até chegar a primeira letra )


const frase = 'Olá, meu bom!';
const pedaco = frase.slice(5, 9);
console.log(pedaco); // Saída: meu 


const frase = 'Olá, meu bom!';
const sub = frase.substring(9, 5);
console.log(sub); // Saída: meu


const frase = 'Olá, meu bom!'; +++++++++++++++++ do que Bom, GANHEI NA MEGA MANIA===HOJE.
const novaFrase = frase.replace('bom', 'parceiro');
console.log(novaFrase); // Saída: Olá, meu parceiro!


const frase = 'Olá, meu bom!';
const palavras = frase.split(' ');
console.log(palavras); // Saída: ['Olá,', 'meu', 'bom!']


Métodos de manipulação de arrays: 
push, pop, shift, unshift, slice, splice, etc.


const frutas = ['maçã', 'banana', 'laranja'];
frutas.push('abacaxi');
console.log(frutas); // Saída: ['maçã', 'banana', 'laranja', 'abacaxi']


const frutas = ['maçã', 'banana', 'laranja'];
const ultimaFruta = frutas.pop();
console.log(ultimaFruta); // Saída: 'laranja'


const frutas = ['maçã', 'banana', 'laranja'];
frutas.shift();
console.log(frutas); // Saída: ['banana', 'laranja']


const frutas = ['maçã', 'banana', 'laranja'];
frutas.unshift('morango');
console.log(frutas); // Saída: ['morango', 'maçã', 'banana', 'laranja']


const frutas = ['maçã', 'banana', 'laranja'];
const fatia = frutas.slice(1, 3);
console.log(fatia); // Saída: ['banana', 'laranja']


const frutas = ['maçã', 'banana', 'laranja'];
frutas.splice(1, 1, 'uva', 'pera');
console.log(frutas); // Saída: ['maçã', 'uva', 'pera', 'laranja']


Métodos para trabalhar com datas e horas: Date

const dataAtual = new Date();
console.log(dataAtual); // Saída: Data atual completa

const dataString = new Date('2023 12 01');
console.log(dataString); // Saída: Fri Jul 01 2023 00:00:00 GMT-0300 (Horário Padrão de Brasília)

const dataEspecifica = new Date(2023, 6, 1, 12, 30, 0, 0);
console.log(dataEspecifica); // Saída: Fri Jul 01 2023 12:30:00 GMT-0300 (Horário Padrão de Brasília)

const dataAtual = new Date();
const dia = dataAtual.getDate();
console.log(dia); // Saída: Dia atual (por exemplo, 17)

const dataAtual = new Date();
const mes = dataAtual.getMonth();
console.log(mes); // Saída: Mês atual (0 a 11, sendo 6 para julho)

const dataAtual = new Date();
const ano = dataAtual.getFullYear();
console.log(ano); // Saída: Ano atual (por exemplo, 2023)

*/

