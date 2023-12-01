programa
{
	funcao inicio()
	{
		real salario_hora, horas_trabalhadas, salario_bruto, salario_liquido
		real imposto_renda = 0.11, inss = 0.08, sindicato = 0.05
		real desconto_inss, desconto_sindicato, desconto_imposto_renda

		escreva("Quanto você ganha por hora? R$ ")
		leia(salario_hora)

		escreva("Quantas horas você trabalhou neste mês? ")
		leia(horas_trabalhadas)

		salario_bruto = salario_hora * horas_trabalhadas
		desconto_inss = salario_bruto * inss
		desconto_sindicato = salario_bruto * sindicato
		desconto_imposto_renda = salario_bruto * imposto_renda

		salario_liquido = salario_bruto - desconto_inss - desconto_sindicato - desconto_imposto_renda

		escreva("\n Salário Bruto: R$ ", salario_bruto)
		escreva("\n IR: R$ ", desconto_imposto_renda)
		escreva("\n INSS: R$ ", desconto_inss)
		escreva("\n Sindicato: R$ ", desconto_sindicato)
		escreva("\n Salário Líquido: R$ ", salario_liquido)
	}
}


