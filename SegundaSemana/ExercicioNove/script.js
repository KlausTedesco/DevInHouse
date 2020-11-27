function getAdd( numberOne, numberTwo ){
    var add = parseInt( getNumber( numberOne ) ) + parseInt( getNumber( numberTwo ) );
    return showResult( add );
}
function getSubtract( numberOne, numberTwo ){
    var subtract = getNumber( numberOne ) - getNumber( numberTwo );
    return showResult( subtract );
}
function getMultiply( numberOne, numberTwo ){
    var multiply = getNumber( numberOne ) * getNumber( numberTwo );
    return showResult( multiply );
}
function getDivide( numberOne, numberTwo ){
    var divide = getNumber( numberOne ) / getNumber( numberTwo );
    return showResult( divide.toFixed( 2 ) );
}
function showResult( result ){
    return document.getElementById("read-only").innerHTML = "A resposta da operação matemática é " + result;
}
function getNumber( id ){
    return document.getElementById( id ).value;
}