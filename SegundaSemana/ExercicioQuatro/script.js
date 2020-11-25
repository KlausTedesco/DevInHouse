var name = prompt( "Digite seu nome:");
var age = prompt( "Digite seu idade:");
var flagSport = confirm( "Você gosta de praticar algum esporte");

function likeSport( flagSport ){
    if( flagSport ){
        return "gosta de esporte.";
    } else{
        return "não gosta de esporte."
    }
}


console.log( "Seu nome é " + name + ", " + age + " anos e " + likeSport( flagSport ) );