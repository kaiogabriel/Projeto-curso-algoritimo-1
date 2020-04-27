
var nome, nota1, nota2;
nome = prompt("Escreva o nome do aluno : ")
nota1 = prompt("Digite a nota 01 : ")
nota2 = prompt("Digite a nota 02 : ")

media = (parseInt(nota1) + parseInt(nota2)) / 2;

if(media >= 5)
    alert ("Aprovado! " + nome)
else
    alert ("Reprovado! " + nome)    