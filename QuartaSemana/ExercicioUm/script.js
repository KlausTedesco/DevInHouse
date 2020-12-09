// 1 - Cálculo de Média de Notas
// Crie uma função que receba como parâmetro uma lista de notas 
// e calcule a média dessas notas imprimindo o resultado.

const grades = [5, 10, 0]

function averageGrades( grades ){
    let result = 0;
    let totalElements = 0;
    grades.forEach( grade => {
        result += grade;
        totalElements++;
    });
    result /= totalElements; 

    console.log( result ) 
}