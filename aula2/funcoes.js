// INÍCIO ESTUDO FUNÇÕES

/*
function calcularArea(lado){
    let area = lado * lado;
    return area;
}

console.log(calcularArea(10))

function calcularMedia(num1, num2, num3){

    let media = (num1 + num2 + num3) / 3;
    return media;

}

let mediaFinal = calcularMedia;

console.log(mediaFinal(3, 3, 3)) 
*/


/* let nome;
let sobrenome;
let idade;
let valorEmprestimo;
let taxaJuros;
let numAnos;
let bomPagador;

function cadastrarCliente(nomeCliente, sobrenomeCliente, idadeCliente, valorEmprestimoCliente, numAnosCliente, bomPagadorCliente){
    
    nome = nomeCliente;
    sobrenome = sobrenomeCliente;
    idade = idadeCliente;
    valorEmprestimo = valorEmprestimoCliente;
    numAnos = numAnosCliente;
    bomPagador = bomPagadorCliente;


}

cadastrarCliente("Jhon", "Costa", 25, 12000, 1, true);

console.log(nome, sobrenome, idade, valorEmprestimo, numAnos, bomPagador)

*/

/* FUNÇÃO COM EXPRESSÃO

const media = function calcularMedia(num1, num2, num3){

    let mediaNum = (num1 + num2 + num3) / 3;
    return mediaNum;
}


//FUNÇÃO COM EXPRESSÃO anonima - sem nome da função

const media2 = function (num1, num2, num3){

    let mediaNum = (num1 + num2 + num3) / 3;
    return mediaNum;
} 

*/
/* 
function calcularMedia(nota1, nota2, nota3){

    let mediaFinal = (nota1 + nota2 + nota3) / 3;
    

    if(mediaFinal >= 6 && mediaFinal <= 9.9){

        console.log('Parabéns, você foi aprovado!');
    }else if(mediaFinal >= 10) {
        console.log('Parabéns, você foi o Orador da turma com média 10');
    }else{
        console.log('Lamento, reprovou!');
    }
    
    return mediaFinal;

};


calcularMedia(10, 10, 10); 

*/

/*

//FUNÇÃO ANONIMA

const calcularMedia = function(nota1, nota2, nota3){

    let mediaFinal = (nota1 + nota2 + nota3) / 3;
    

    if(mediaFinal >= 6 && mediaFinal <= 9.9){

        console.log('Parabéns, você foi aprovado!');
    }else if(mediaFinal >= 10) {
        console.log('Parabéns, você foi o Orador da turma com média 10');
    }else{
        console.log('Lamento, reprovou!');
    }
    
    return mediaFinal;

};

const resultado = calcularMedia(9, 6.8, 9);

console.log(resultado);


const calcularNumero = function(num1, num2){

    let soma = num1 + num2;
    return soma;
}

let resultado = calcularNumero(10, 3);

console.log(resultado)


//CALCULAR MEDIA USANDO ARROW FUNCTION

const calcularMedia = (nota1, nota2, nota3) => {

    let mediaFinal = (nota1 + nota2 + nota3) / 3;

    return mediaFinal;
}

const resultado = calcularMedia(5, 312321, 5);

console.log(resultado);

let imPar = function(numero){

    let calcular = numero % 2;

    if(calcular === 0){

        console.log(`O número é par, pois o resto é 0.`);
    }else if(calcular != 0){
        console.log(`O numero é impar, pois o resto é diferente de 0.`);
    }

    return;
}

let resultado1 = imPar(5);//

console.log(resultado1);


//ARROW FUNCTION

const calcularMedia = (number1, number2, number3) => {
    let media = (number1 + number2 + number3) / 3;

    return media;
};

let resultado = calcularMedia;

console.log(resultado(5, 517, 5))



//ESCOPO DE FUNÇÕES - Global x Local

// dentro de uma função, pode acessar variáveis globais e locais;
// fora de uma função, só pode acessar variáveis globais;


//PARAMETROS DE UMA FUNÇÃO

//default - definir um valor padrão para o parametro da função caso não seja informado nenhuma entrada

let estaChovendo;

let tempoHoje = function(tempo){

    estaChovendo = tempo;

    if(estaChovendo === "sim"){

        console.log("Que pena! Está chovendo.");
    }else{
        console.log("Ótimo! Está SOL.");
    }

}


tempoHoje();



//PARÊMETRO REST

    


    function interrogar(){

        let contadorSim = 0;
        let pergunta1 = prompt("Telefonou para vítima?");
        let pergunta2 = prompt("Esteve no local?");
        let pergunta3 = prompt("Mora perto da vítima?");
        let pergunta4 = prompt("Devia para vítima?");
        let pergunta5 = prompt("Trabalhou para vítima?");

        if(pergunta1 === "sim"){

            contadorSim += 1;
        }
        if(pergunta2 === "sim"){

            contadorSim += 1;
        }
        if(pergunta3 === "sim"){

            contadorSim += 1;
        }
        if(pergunta4 === "sim"){

            contadorSim += 1;
        }
        if(pergunta5 === "sim"){

            contadorSim += 1;
        }

        return contadorSim;
}

function classificarSuspeito(contadorSim){

    if(contadorSim === 5){
        console.log("Você é o Assassino! Está preso!");
    }else if(contadorSim === 4 || contadorSim === 3){
        console.log("Você é o Cúmplice! Está preso!");
    }else if(contadorSim === 2){
        console.log("Você é suspeito!");
    }else{
        console.log("Você é inocente!");
    }

}


classificarSuspeito();
*/


// ARRAY

// array - número de index começa do 0
// array - lista, armazena valores, variável, objetos

/* ARRAY - CRIAR
// const array1 = ["elemento0", "elemento1"];
// const array2 = Array("elemento0", "elemento1");
// const array3 = new Array ("elemento0", "elemento1");

//COMO ACESSAR ELEMENTOS DO ARRAY
//const array1 = ["elemento0", "elemento1"];
//console.log(array1[0]);


//COMO ADICIONAR ELMENTOS A UM ARRAY

//const frutas = [];
//frutas[0] = "uva";

// TROCAR ELEMENTO
//frutas[0] = "maça";

//console.log(frutas.length);
// .length - retorna tamanho do array

//METODOS ARRAYS

//push() - adicionar elementos ao final do array e retorna o comprimento
//const frutas = ["manga", "uva"];
//frutas.push("pera");
//console.log(frutas); ["manga", "uva", "pera"]


//unshift() - adicionar elementos ao inicio do array e retorna o comprimento
//const frutas = ["manga", "uva"];
//frutas.unshift("pera");
//console.log(frutas); ["pera", "manga", "uva",]

//pop() - remove o último elemento do array
//shift() - remove o primeiro elemento do array

//splice() - remove intervalos de elementos
//frutas.splice(3, 2) - a partir do elmento 3, 2 dados serão removidos

//odernar array - sort()
//reverter array - reverse()


//map() - mapeia o array original para gerar um novo
//filter() - filtra os elementro do array e gera um novo
//find() - obtem o valor do primeiro elewmento do array que satisfaz a condição


//math.random() - rtornar número aleatorio
//math.floor() - numero aleatorio arredondado pra baixo
//console.log(Math.floor(Math.random() * 3))


///PERCORRER ARRAY

// FOR tradicional

const frutas = ["melancia", "uva", "pera", "maça"];

for(let i = 0; i < frutas.length; i++){
    console(frutas[i]);
}


FOR in

for(let indices in frutas){

    console.log(frutas[indices]);
}


//FOR of

for(let fruta in frutas){

    console.log(fruta);
}

//forEach

frutas.forEach((fruta, indice) => {

    console.log(fruta);
    console.log("fruta " + indice + ": " + fruta);
})


const lista = ["Jhon", "Natalia", "Carol", "Rodrigo", "Nathan"];

 function adicionarPessoa(pessoa){

    lista.push(pessoa);

    console.log(lista);

    return;

 }


 adicionarPessoa("Bolinha");

 

 let listaAprovados = [];
 let listaReprovados = [];

let Alunos = [
    {nome: "Jhon Costa", nota: 8.5},
    {nome: "Jane Doe", nota: 7.5},
    {nome: "Jim Smith", nota: 4.5}
  ];
  


function classificarAluno(alunos){


    for(let i = 0; i < Alunos.length; i++){

        let aluno = Alunos[i];

        if(aluno.nota >= 6 && aluno.nota <= 10 ){
            listaAprovados.push(aluno);
        }else if(aluno.nota >= 0 && aluno.nota <= 5.0){
            listaReprovados.push(aluno);
        }
    }

    return {listaAprovados, listaReprovados};

}


classificarAluno();

*/










