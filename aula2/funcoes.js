// INÍCIO ESTUDO FUNÇÕES

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