programa
{
	funcao inicio()
	{
		real dinheiro, litros, distancia
		real preco = 5.00
		real kmlitro = 20.00

		escreva("Quanto dinheiro voc� tem? R$ ")
		leia(dinheiro)

		litros = dinheiro / preco
		distancia = litros * kmlitro

		escreva("Você consegue comprar ", litros, " litros de combust�vel.\n")
		escreva("Seu carro pode andar ", distancia, " km com este tanto de combust�vel.")
	}
}
