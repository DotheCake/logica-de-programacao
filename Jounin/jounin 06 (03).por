programa
{
	funcao inicio()
	{
		real valorEmprestimo
		inteiro numeroParcelas
		real salario
		real valorParcela
		real maxParcela
 
		escreva("Digite o valor do empréstimo: ")
		leia(valorEmprestimo)

		escreva("Digite o número de parcelas: ")
		leia(numeroParcelas)

		escreva("Digite o salário do solicitante: ")
		leia(salario)

		valorParcela = valorEmprestimo / numeroParcelas
		maxParcela = salario * 0.30

		se (valorParcela <= maxParcela) {
			escreva("Empréstimo aprovado!💲")
		} senao {
			escreva("Empréstimo não aprovado.😒")
		}
	}
}