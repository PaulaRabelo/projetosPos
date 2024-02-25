function soma(a, b){
    return a + b
}

function subtracao(a, b){
    return a - b
}

// exportação default, não estou definindo um nome, estou exportando o objeto como um todo. 
// module.exports = {soma,subtracao}

// pode ser usado desta forma tbm
export default {soma, subtracao}