programa
{
	funcao inicio()
	{
		real salario
		inteiro tempo
		real bonus

		escreva("Digite o salário do funcionário: ")
		leia(salario)

		escreva("Digite o tempo de serviço do funcion�rio: ")
		leia(tempo)

		se (tempo >= 5) {
			bonus = salario * 0.20
		} senao {
			bonus = salario * 0.10
		}

		escreva("O valor do bônus do funcionário é: ", bonus)
	}
}

