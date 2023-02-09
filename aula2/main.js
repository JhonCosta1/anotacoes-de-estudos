// TIPOS DE DADOS
//Primitivos: string, number, BigInt, boolean, undefined e symbol
//Primitivo especial: Null
//Complexos: objeto e função


//String - texto puro
//Number - número inteiro ou flutuante
//Boolean - True ou falso
//Symbol - Valor exclusivo e imutável
//BigInt - número maiores que 2*5-3
//Undefined - valor não atribuido, espaço sem nada

//Null - ausencia intecional de um valor de objeto
//Undefined - variável sem valor atribuido

//JavaScript - diferencia letra maiúscula de minúscula

//Móduo % - número % de x = 0 é par ,  número % de x = 1 é impar

//Números especiais: Infinity+ ou - // NaN - not a number, operação falha


/*
let idProduto = 00001;
let nomeProduto = 'Toddy';
let precoProduto = 15.99;
let validadeProduto = true;

let nomeProduto1 = 'Nescau';
let precoProduto1 = 14.99;
let validadeProduto1 = true;

if(idProduto === 00002){
    console.log(nomeProduto);
    console.log(precoProduto);
    console.log(validadeProduto);
}else{
    console.log(nomeProduto1);
    console.log(precoProduto1);
    console.log(validadeProduto);
}
*/



//ESTRUTURAS CONDICIONAIS
// IF
// ELSE
// ELSE IF

/*
switch (expressão) {

    case "nome":
        console.log('x');
        break;

}

*/


//OPERADORES TERNARIO - inicializar variavel

// e ? "true" : "false"

/* let corredorA = 15
let corredorB = 14
let corredorC = 13

let vencedor = 13

if(corredorC === vencedor){

    console.log(`Parabéns Corredor, você venceu!!`)
}else{
    console.log(`Lamento Corredor, você perdeu!!`)
}; */


//LAÇOS DE REPETIÇÃO

/*
contador = 1

enquanto contador <= 50, faça:
    console.log(contador);
    contator++;

*/

//FOR repete com número definido de repetições
// for(atribuição; condição; atualização){bloco de codigo}



for(let i = 1; i <= 10; i++){

    console.log(i);
}

// WHILE - ação deve continuar até parada
// enquanto for true, faça algo
// while(condição) {}


// DO WHILE - executa código, depois verifica
