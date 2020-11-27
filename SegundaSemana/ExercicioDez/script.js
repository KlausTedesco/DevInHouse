const EVEN_NUMBER = 0;

function getOddEven( number ){
    var oddEven = getNumber( number ) % 2;
    var result;
    EVEN_NUMBER == oddEven ? 
        result = "par."
        : result = "ímpar."

    return showResult( result );
}
function showResult( result ){
    return document.getElementById("read-only").innerHTML = "Este número é " + result;
}
function getNumber( id ){
    return document.getElementById( id ).value;
}