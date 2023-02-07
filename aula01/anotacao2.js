//Rest/Spread ...
function total(...precos){
    let total = 0;
    precos.forEach(p => total += p);
    return total
}

console.log(total(23.44, 22, 3.45, 5.67).toFixed(2));

console.log(total(23, 67));

console.log(total(3, 6, 77));

console.log(total());

let frutas1 = ['manga', 'pera'];
let frutas2 = ['jaca', 'uva'];

let compras = [...frutas1, ...frutas2];

//===========================================

//Conjuntos - não aceita repetição de dados, sem index

let cursos = new Set();

cursos.add('Programação em C').add('Programação em Java');
cursos.add('Banco de Dados');

//tamanho do conjunto
console.log(cursos.size);

//verificar se está no conjunto true ou false 

console.log(cursos.has('Banco de dados'));

//deletar elemento de conjunto
cursos.delete('Programação em C');

//===========================================

// For of

let nome = 'Jhon costa'

for(let letra of nome){
    console.log(letra);
}

let numeros = [1, 2 ,3 ,4 ,5]

for(let numero of numeros){
    console.log(numero * 2);
}

//===========================================

//Babel


