/*var
    sairloop : caractere
    valor01, valor02: real
inicio
// Seção de Comandos 
    repita
         Escreva ("Digite o primeiro valor: ")
         leia (valor01)
         Escreva ("Digite o segundo valor: ")
         leia (valor02)
         Escreval ("Resultado: ", valor01 + valor02)
         Escreval ("Deseja sair?  S/N")
         leia (sairloop)
    ate sairloop <> "N"
    */

   function acaoButao(){
    var sairloop, valor01, valor02
    do {  
        valor01 = prompt("Digite o primeiro valor: ")
        valor02 = prompt("Digite o segundo valor: ")
        document.getElementById("paragrafo").innerText = "Resultado: " + (parseInt ( valor01) + parseInt( valor02) )
        sairloop = prompt("Deseja sair?  S/N")
    } while (sairloop == "N");
   
}
         
           

