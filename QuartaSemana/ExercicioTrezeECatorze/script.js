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

// 13 - Filtrar Cidades
// Considerando uma entidade Cidade, contendo os seguintes atributos 
// nome e estado, crie uma função que receba uma lista de cidades e 
// retorne a lista de estados em que o estado seja “SC”.
function getCities( places ){
    checkList( places );

    let citiesOfState = places.filter( city => city.state === "SC" );

    if( !citiesOfState ){
        return console.log( "O estado de SC não possui cidades na lista.");
    }

    return citiesOfState;
}

// 14 - Transformar cidades em uma String concatenada
// Considerando a entidade Cidade do exercício 13: https://trello.com/c/4YnGrbg1 
// crie uma função que recebe uma lista de cidades e retorna uma lista com os 
// nomes das cidades concatenados com o seu estado.
function getListCities( places ){
    let cities = getCities( places );

    return cities.map( place => place.city + "-" + place.state );
}