/*var
    valor01, valor02, resultado: real
    operacao: caractere
inicio
// Seção de Comandos
   Escreval ("A proposta deste programa é calcular dois valores baseados na operação")
   Escreva ("Digite o primeiro valor: ")
   leia (valor01)
   Escreva ("Digite a operação ex: +, -, *, / :")
   Leia (operacao)
   Escreva ("Digite o segundo valor: ")
   leia (valor02)
   
   escolha operacao
   caso "+"
        resultado := valor01 + valor02
   caso "-"
        resultado := valor01 - valor02
   caso "*"
        resultado := valor01 * valor02
   caso "/"
        resultado := valor01 / valor02
fimescolha

Escreval ("Resultado do calculo é:", resultado)*/

function acaoButao(){
    var valor01, valor02, resultado, operacao
    valor01 = prompt("Digite o primeiro valor: ")
    operacao = prompt("Digite a operação ex: +, -, *, / :")
    valor02 = prompt("Digite o segundo valor: ")
    switch (operacao) {
        case "+":
        resultado = parseInt( valor01 ) + parseInt( valor02 )
        break;
        case "-":
        resultado = parseInt( valor01 ) - parseInt( valor02 )
        break;
        case "*":
        resultado = parseInt( valor01 ) * parseInt( valor02 )
        break;
        case "/":
        resultado = parseInt( valor01 ) / parseInt( valor02 )
        break;
    } 
    document.getElementById("paragrafo").innerText = resultado
}   