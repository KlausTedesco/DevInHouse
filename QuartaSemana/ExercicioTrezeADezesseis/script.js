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

const city = {
    name: "Araranguá",
    state: "SC"
}

function checkList( places ){
    if ( places.length === 0 ){
        throw Error( "Lista está vazia." )
    }
}

// 13 - Filtrar Cidades
// Considerando uma entidade Cidade, contendo os seguintes atributos 
// nome e estado, crie uma função que receba uma lista de cidades e 
// retorne a lista de estados em que o estado seja “SC”.
function getCitiesOfSC( places ){
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
function getListCitiesOfSC( places ){
    let cities = getCitiesOfSC( places );

    return cities.map( place => place.city + "-" + place.state );
}

// 15 - Verificar existência de Estado
// Novamente considerando a entidade Cidade do exercício 13: https://trello.com/c/4YnGrbg1 
// crie uma função que receba uma lista de cidades e verifique 
// se alguma das cidades é do estado “RS”, retornando o resultado.
function hasCitiesOfRS( places ){
    checkList( places );

    return places.some( city => city.state === "RS" );
}

// 16 - Desmontar entidade
// Considerando a entidade Cidade do exercício 13: https://trello.com/c/4YnGrbg1 
// crie uma função que receba um objeto cidade e atribua nome e o estado a duas variáveis e imprima elas no console.
function destructEntity( city ){
    let { name, state } = city;

    console.log( `Nome da Cidade: ${name}` );
    console.log( `Nome do Estado: ${state}` );
}