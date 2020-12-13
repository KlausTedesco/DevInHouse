const listNumbers = []

function checkList( listNumbers ){
    if ( listNumbers.length === 0 ){
        throw Error( "Lista está vazia." )
    }
}

// 8 - Multiplicação de Valores da Lista
// Crie uma função que receba uma lista de valores numéricos, 
// e utilizando a função reduce imprima a multiplicação dos valores da lista.
function multiplyListValues( listNumbers ){
    checkList( listNumbers );

    return listNumbers.reduce( ( total, number ) => total * number );
}