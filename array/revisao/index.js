const comidas = ['lasanha', 'batata', 'bacon']
console.log(comidas[2])

comidas.forEach((comida, posicao) => {
    console.log(`Na posicao ${posicao} temos a comida: ${comida}`)
})