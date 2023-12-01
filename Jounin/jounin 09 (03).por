programa
{
	funcao inicio()
	{
		real preco
		inteiro quantidade

		escreva("Digite o preço do pão: ")
		leia(preco)

		escreva("Panificadora Pão de Ontem - Tabela de preços\n")

		para (quantidade = 1; quantidade <= 50; quantidade++)
		{
			escreva(quantidade, " - R$ ", quantidade * preco, "\n")
		}
	}
}