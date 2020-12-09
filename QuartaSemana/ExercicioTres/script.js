// 3 - Verificação de Maioridade de Pessoas
// Considerando uma entidade Pessoa que contém os atributos nome, idade,
// telefone e profissão, crie uma função que receba uma lista de pessoas 
// e descubra se alguma das pessoas da lista é maior de idade (18 anos) 
// retornando o resultado.

const personOne = {
    name:'Klaus', 
    age:'28', 
    phone:'048999999999', 
    occupation: 'Developer'
};

const personTwo = {
    name:'Demétrio', 
    age:'7', 
    phone:'048999999999', 
    occupation: 'Student'
};

const personThree = {
    name:'Frederico', 
    age:'2', 
    phone:'048999999999', 
    occupation: 'Student'
};

const listPeople = [ personOne, personTwo, personThree ]

function checkAdult( listPeople ){
    return listPeople.some( person => person.age >= 18 ) ;
}