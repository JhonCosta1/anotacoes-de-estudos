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

//FUNÇÃO COM EXPRESSÃO

const media = function calcularMedia(num1, num2, num3){

    let mediaNum = (num1 + num2 + num3) / 3;
    return mediaNum;
}


//FUNÇÃO COM EXPRESSÃO anonima - sem nome da função

const media2 = function (num1, num2, num3){

    let mediaNum = (num1 + num2 + num3) / 3;
    return mediaNum;
}