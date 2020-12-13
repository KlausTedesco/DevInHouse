const rectangle = {
    height: 3, 
    width: 5
};

// 11 - Cálculo de área de um Retângulo
// Crie uma arrowFunction que receba um objeto contendo 
// altura e largura de um retângulo e retorne a área do retângulo.
const checkRectangleArea = rectangle => {
    let result = Number( rectangle.width ) * Number( rectangle.height );
    return 'Área do retangulo é ' + result;
}