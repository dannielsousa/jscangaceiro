var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

console.log(campos);

var tbody = document.querySelector('table tbody');

//Escutando o click no botão "incluir"
document.querySelector('.form').addEventListener('submit', function(event) {

    event.preventDefault();

    var tr = document.createElement('tr');    //cria uma nova linha para a tabela

    campos.forEach(function(campo) {

        var td = document.createElement('td');   //	cria	uma	td	sem	informações
        td.textContent = campo.value;    //	atribui	o	valor	do	campo	à	td
        tr.appendChild(td);   //	adiciona	a	td	na	tr

    });

    var tdVolume = document.createElement('td');    //	nova	td	que	armazenará	o	volume	da	negociação
    tdVolume.textContent = campos[1].value * campos[2].value;    //	as	posições	1	e	2	do	array	armazenam	os	campos	de	quantidade 	e	valor,	respectivamente
    tr.appendChild(tdVolume);//	adicionando	a	td	que	faltava	à	tr
    tbody.appendChild(tr); //adicionando a tr

    campos[0].value = '';
    campos[1].value = '';
    campos[2].value = '';
    campos[0].focus();
});

