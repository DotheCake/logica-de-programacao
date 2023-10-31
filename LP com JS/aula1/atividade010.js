// 10. Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 11% para o Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:salário bruto.
// quanto pagou ao INSS.
// quanto pagou ao sindicato.
// o salário líquido.
// calcule os descontos e o salário líquido, conforme a tabela abaixo:+ Salário Bruto : R$
// - IR (11%) : R$
// - INSS (8%) : R$
// - Sindicato ( 5%) : R$
// = Salário Liquido : R$
// Obs.: Salário Bruto - Descontos = Salário Líquido.

    let horas_trabalhadas, ganho_hora
    horas_trabalhadas = 44
    ganho_hora = 8
    salario_bruto = (horas_trabalhadas * ganho_hora)
    inss = salario_bruto / 100 * 8
    sindicato = salario_bruto / 100 * 5
    imposto_de_renda = salario_bruto / 100 * 11

    console.log ("seu salario bruto é: R$ " + salario_bruto) 

    console.log ("Você pagou de INSS: R$ " + inss)

    console.log ("Você pagou para o sindicato: R$ " + sindicato)

    console.log ("Seu desconto do imposto de renda: R$ " + imposto_de_renda)

    console.log ("Seu salario liquido é: R$ " + (salario_bruto - inss - sindicato - imposto_de_renda))

    


