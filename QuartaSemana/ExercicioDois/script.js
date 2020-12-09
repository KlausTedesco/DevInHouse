// 2 - Quadrado de valores
// Crie uma função que receba um uma lista de números e imprima o quadrado de cada número.

const list = [2, 7, 10];

function squareNumbers( list ){
    let resultList = [];

    list.forEach( element => {
        let result = 0;
        result = Math.pow( element, 2 );
        resultList.push( result );
    });
    console.log( resultList ); 
}