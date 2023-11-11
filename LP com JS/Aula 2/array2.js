let personagem = [
    "Jaina",
    "Mago",
    "Elfo",
    "Cajado",
    100,//vida
    50//força
]

console.log("======= FICHA DO PERSONAGEM =======")
console.log("Nome: " + personagem [0])
console.log("Classe:" + personagem [1])
console.log("Raça: " + personagem [2])
console.log("Equipamento: " + personagem [3])
console.log("Vida: " + personagem [4])
console.log("Força: " + personagem [5])

console.log("CAPÍTULO 01 - O INÍCIO")
console.log("Você acaba de chegar na cidade e foi logo procurar a loja de equipamentos mágicos")
console.log("Na loja você ouve da sobre um grimorio com magias que você procura a anos")
console.log("Com essa noticia você pega as informações que recebeu e vai em busca do ninho do dragão")
console.log("Você encontra o ninho, role o dado para determinar se vai ter sucesso no loot")

let dado = Math.floor(Math.random() * (6 - 1 + 1)) + 1
if (dado > 5){
    console.log("Sucesso!!!!!!! Você conseguiu pegar o grimório")
}else{
    console.log("Falha! :( Você ouve o dragão acordar se assusta e cai, perca 2 de vida")
    personagem[4] = personagem[4] - 2
    console.log("Vida: " + personagem[4])
}