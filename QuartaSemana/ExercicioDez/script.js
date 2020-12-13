// 10 - Soma com resultado Par
// Crie uma função que retornará uma promise, 
// ela receberá dois valores numéricos como parâmetro, 
// a função deve somar os dois valores e somente resolver 
// a promise caso o resultado seja par retornando o valor 
// da soma e rejeitando a promise caso ímpar, 
// retornando uma mensagem explicativa
function sumWithResultPar( numberOne, numberTwo ){
    return new Promise( ( resolve, reject ) => {
        try {
            resolve( aux( numberOne, numberTwo ) );
        } catch (error) {
            reject( 'A Soma dos números ('+ numberOne + ' e ' + numberTwo + ') não é par.' );
        }
    });   
}

function aux( numberOne, numberTwo ){
    let resultSum =  Number(numberOne) + Number(numberTwo); 
    let isEvenNumber = resultSum % 2;

    if( isEvenNumber ){
        throw Error();
    }
    return resultSum;
}
