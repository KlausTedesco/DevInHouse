const SHOW_LIMIT = 10;

function calculate( type ){
    var term = getValue( "first-term" );
    var ratio = getValue( "common-ratio" );
    validate( term, ratio );  
    
    var result = type === 'arithmetic-progression' ? 
        getArithmeticProgression( term, ratio )
        : getGeometricProgression( term, ratio );

    getFormatResult( result );
}

function getValue( id ){
    return document.getElementById ( id ).value;
}

function validate( term, ratio ){
    if( term.length === 0 && ratio.length === 0 ){
        alert( "Ambos os campos devem estar preenchidos" );
        throw Error( "Ambos os campos devem estar preenchidos" );
    }
}

function getArithmeticProgression( term, ratio ){
    var result = [];
    for (var i = 0; i < SHOW_LIMIT; i++) {
        result.push( term );
        term = Number( term ) + Number( ratio );
    }
    return result;
}

function getGeometricProgression( term, ratio ){
    var result = [];
    for (var i = 0; i < SHOW_LIMIT; i++) {
        result.push( term );
        term *= ratio ;
    }
    return result;
}

function getFormatResult( result ){
    document.getElementById('list-terms').innerHTML = "<h3>Resultado</h3>" + result.join(', ');
}