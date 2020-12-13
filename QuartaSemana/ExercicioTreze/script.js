// 13 - Filtrar Cidades
// Considerando uma entidade Cidade, contendo os seguintes atributos 
// nome e estado, crie uma função que receba uma lista de cidades e 
// retorne a lista de estados em que o estado seja “SC”.
const places = [
    {
        city: "Florianópolis",
        state: "SC"
    },
    {
        city: "Curitiba",
        state: "PR"
    },
    {
        city: "São Paulo",
        state: "SP"
    },
    {
        city: "Porto Alegre",
        state: "RS"
    },
    {
        city: "Blumenau",
        state: "SC"
    }
]

function checkList( places ){
    if ( places.length === 0 ){
        throw Error( "Lista está vazia." )
    }
}

function getCities( places ){
    checkList( places );

    let citiesOfState = places.filter( city => city.state === "SC" );

    if( !citiesOfState ){
        return console.log( "O estado de SC não possui cidades na lista.");
    }

    return citiesOfState;
}