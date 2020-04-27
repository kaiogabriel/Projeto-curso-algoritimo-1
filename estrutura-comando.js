/*
Escreval ("escreva o nome do aluno")
leia (nome)
Escreval ("Digite a nota 01 do aluno")
leia (nota1)
Escreval ("Digite a nota 02 do aluno")
leia (nota2)
media := (nota1 + nota2) / 2

se media >=5 entao
Escreval ("Aprovado ", nome)
senao
Escreval ("Reprovado ", nome)
fimse
*/

var nome, nota1, nota2;
nome = prompt("Escreva o nome do aluno : ")
nota1 = prompt("Digite a nota 01 : ")
nota2 = prompt("Digite a nota 02 : ")

media = (parseInt(nota1) + parseInt(nota2)) / 2;

if(media >= 5)
    alert ("Aprovado! " + nome)
else
    alert ("Reprovado! " + nome)    