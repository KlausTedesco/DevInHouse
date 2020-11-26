const DIDNT_HAVE_BIRTHDAY = 1;

var yearBirth = prompt( "Qual o ano do seu nascimento: ", "AAAA" );
var yearCurrent = prompt( "Qual o ano atual: ", "AAAA" );

function getAgeX( yearBirth, yearCurrent ){
    return ageX = yearCurrent - yearBirth;
}
function getAgeY( ageX ){
    return ageY = ageX - DIDNT_HAVE_BIRTHDAY;
}

alert( "Sua idade é " + getAgeX( yearBirth, yearCurrent ) + " ou " + getAgeY( ageX ) );