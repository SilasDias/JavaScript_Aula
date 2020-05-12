function soma(n1, n2) {
    return n1 + n2;
}
alert(soma(5,10));

function validarIdade(idade){
    if(idade >= 18){
        validar = true;
    }
    else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
validarIdade(idade);
console.log(validar);

function () {
    
}

// Teste git

/*var data = new Date();
alert(data.getDay());
alert(data.getHours());
alert(data.getMinutes());
alert(data.getMonth()+1);
*/


/*var count;
for(count=1; count <= 5; count++) {
    console.log(count);
    alert(count);
}*/



/*var count = 1;
while(count <= 5) {
    console.log(count);
    alert(count);
    count ++;
}*/


/*var nome = "Silas Dias";
alert("Bem Vindo " + nome);*/

/*var idade = prompt("Qual a sua idade?");
//var idade = 18;
if (idade >= 18) {
    alert("Maior de Idade!");
}
else {
    alert("Menor de Idade!");
}*/


/*var frutas = [{nome:"Maça", cor:"Vermelho"}, {nome:"Uva", cor:"Roxa"}]
console.log(frutas);
alert(frutas[1].nome); */

//var fruta = {nome:"Maça", cor:"Vermelho"}
//console.log(fruta.nome);

//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista[0]);
//console.log(lista.toString()[0]); //imprimi so o caracter da lista.
//console.log(lista.join(" - ")); //Adiciona na string.
//alert(lista[1])