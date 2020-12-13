// 17 - Ranking de Livros mais Vendidos
// Crie uma função que apresente o ranking dos livros mais vendidos. 
// Você precisa diferenciar a posição apenas dos 3 primeiros do ranking, 
// os demais serão apenas listados.
const rankingBooks = ( first, second, third , ...otherBooks ) => {
    console.log( `Livros mais vendidos: 1# ${first}, 2# ${second} e 3# ${third} lugar, e demais livros: ${otherBooks}`)
}

rankingBooks( "Clean Code (Robert C. Martin)", "The Software Craftsman (Sandro Mancuso)", "Refactoring (Martin Fowler)", "TDD Desenvolvimento Guiado por Testes (Kent Beck)", "xUnit Test Patterns Refactoring Test Code (Gerard Meszaros)" );