
let frutas = ["Laranja", "Abacaxi", "Morango"]
// contagem começa em 0 - 1 - 2 - 3 - 4
// mostra tudo interativo no navegador
console.dir(frutas)
// mostra a posição
console.log (frutas[1])

//alterando o valor da posição do array
frutas[1] = "Pera"
console.dir(frutas)

// adcionar um novo elemento no inicio do array
frutas.unshift("Banana");
console.dir(frutas)

// adcionar um novo elemento no final da array
frutas.push ("Maçã")
console.dir(frutas)

//ordernar o array em ordem crescente
frutas.sort()
console.dir(frutas)


// ordenar o array em ordem decrescente
frutas.reverse()

console.dir(frutas)


// remover o primeiro item do array
frutas.shift()
console.dir(frutas)

//remover o ultimo item do array

frutas.pop()
console.dir(frutas)