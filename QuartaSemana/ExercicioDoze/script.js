// 12 - Impressão de Endereço
// Crie uma função que receba 3 parâmetros (bairro, cidade, estado) 
// e imprima os dados em um formato de endereço, utilizando Template String.
var neighborhood = 'Centro'
var city = 'Florianópolis'
var state = 'SC'

function getAddress( neighborhood, city, state ){
    let address = `O endereço é: Bairro ${neighborhood}, Cidade ${city} e Estado ${state}`;

    return address;
}
