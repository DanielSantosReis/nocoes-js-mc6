/*

Arrays
Lista de dados (String, Number, Boolean)



let nomes = ["João", "Maria", "Pedro", "Ana"]
let idades = [25, 30, 22, 28]
let booleanos = [true, false, true, false]
*/

const nomes = ["João", "Maria", "Pedro", "Ana"]

// nomes.push("Carlos") // Adiciona um novo nome ao final do array
// nomes.pop() // Remove o último nome do array
// nomes.shift() // Remove o primeiro nome do array
// nomes.unshift("Lucas") // Adiciona um novo nome no início do array

console.log(nomes)
console.log("tamanho do array:", nomes.length)

console.log("Primeiro nome:", nomes[0])
console.log("Segundo nome:", nomes[1])
console.log("Último nome:", nomes[nomes.length - 1])
/*
for (let i = 0; i < nomes.length; i++) {
    console.log(`Nome na posição ${i}: ${nomes[i]}`)


} 
 */

const array1= ['Eduardo', 'Herbert', 'Pedro']

let array2 = ['Silva', 'Santos', ...array1]

console.log(array2)