/*passou := falso
   Escreval ("escreva o nome do aluno")
            leia (nome)
   Escreval ("Digite a nota 01 do aluno")
            leia (nota1)
   Escreval ("Digite a nota 02 do aluno")
            leia (nota2)
   media := (nota1 + nota2) / 2

   se media >=50 entao
     passou := verdadeiro
   fimse

   se ( passou ) &&  ( media >=50 || media <= 70 ) entao
      Escreval ("Aprovado ", nome)
   senao
        Escreval ("Reprovado ", nome)
   fimse
   */


  var nome, nota1, nota2, passou ;

    passou = false;

  nome = prompt("Escreva o nome do aluno : ")
  nota1 = prompt("Digite a nota 01 : ")
  nota2 = prompt("Digite a nota 02 : ")
  
  media = (parseInt(nota1) + parseInt(nota2)) / 2;
  
  if(media >= 50)
        passou = true;
  
  if (passou && media >= 70)      
     alert ("Aprovado! " + nome)
  else
      alert ("Reprovado! " + nome)