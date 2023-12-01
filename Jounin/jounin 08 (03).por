programa
{
	funcao inicio()
	{
		real preco = 1.99
		inteiro quantidade

		escreva("Lojas Quase Dois - Tabela de preços\n")

		para (quantidade = 1; quantidade <= 50; quantidade++)
		{
			escreva(quantidade, " - R$ ", quantidade * preco, "\n")
		}
	}
}
