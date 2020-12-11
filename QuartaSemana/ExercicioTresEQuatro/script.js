// 3 - Verificação de Maioridade de Pessoas
// Considerando uma entidade Pessoa que contém os atributos nome, idade,
// telefone e profissão, crie uma função que receba uma lista de pessoas 
// e descubra se alguma das pessoas da lista é maior de idade (18 anos) 
// retornando o resultado.

// 4 - Verificação de Profissão
// Considerando a mesma entidade Pessoa do exercício 3: https://trello.com/c/LgeM2xcO 
// crie uma função que receba uma lista de pessoas e descubra se todas as pessoas da lista 
// possuem a profissão “Programador” retornando o resultado.

const personOne = {
    name:'Klaus', 
    age:'28', 
    phone:'048999999999', 
    occupation: 'Programador'
};

const personTwo = {
    name:'Demétrio', 
    age:'7', 
    phone:'048999999999', 
    occupation: 'Estudante'
};

const personThree = {
    name:'Frederico', 
    age:'2', 
    phone:'048999999999', 
    occupation: 'Estudante'
};

const listPeople = [ personOne, personTwo, personThree ]

function checkAdult( listPeople ){
    return listPeople.some( person => person.age >= 18 ) ;
}

function checkOccupation( listPeople ){
    return listPeople.every( person => person.occupation === 'Programador' ) ;
}