/*
    Escreva("Digite a quantidade de vezes que vai ser verificado a idade: ")
    leia (limite)
    contador := 0
    enquanto contador < limite faca
        Escreva ("Digite o nome da pessoa: ")
        leia (nome)
        Escreva("Digite a idade ", nome, ": ")
        leia (idade)
        se idade > 18 entao
            escreval (nome, " Você é maior de idade!")
        senao
            escreval (nome, " Você é menor de idade!")
        fimse
        contador := contador + 1

fimalgoritmo
*/
function acaoButao(){
var nome, idade, limite, contador

limite = prompt("Digite a quantidade de vezes que vai ser verificado a idade: ")
contador = 0
while(contador < limite ){
    nome = prompt("Digite o nome da pessoa: ")
    idade = prompt("Digite a idade " + nome + ": ")
    if ( idade> 18 )
       document.getElementById("paragrafo").innerText = nome + " Você é maior de idade!"
    else
       document.getElementById("paragrafo").innerText = nome + " Você é menor de idade!"
    contador++ 
    }
}