import op from "./operacoes.js"
import mult from "./operacoes2.js"
import { divisao, resto } from "./operacoresNomeados.js" 

// Forma de importar o arquivo 
// const mult = require("./operacoes2.js")
// const op = require("./operacoes.js")

console.log("Soma",op.soma(2,3))
console.log("Subtracao",op.subtracao(4,3))
console.log("Multiplicação", mult(6,9))
console.log("Divisão", divisao(10,5))
console.log("Resto", resto(6,9))

