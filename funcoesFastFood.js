var preco = 0;

function somarBatata(precoBatata) {
	preco = preco + Number(precoBatata); 

	document.getElementById('pfinal').innerHTML = preco.toFixed(2);
}

function somarRefri(precoRefri) {
	preco = preco + Number(precoRefri);

	document.getElementById('pfinal').innerHTML = preco.toFixed(2);
}

function somarHamb(precoHamb) {
	preco = preco + Number(precoHamb);

	document.getElementById('pfinal').innerHTML = preco.toFixed(2);
}

function somarCachorro(precoCachorro) {
	preco = preco + Number(precoCachorro);

	document.getElementById('pfinal').innerHTML = preco.toFixed(2);
}

function somarMilk(precoMilk) {
	preco = preco + Number(precoMilk);

	document.getElementById('pfinal').innerHTML = preco.toFixed(2);
}

function enviarPedido(){
	preco = 0;
	window.alert('Pedido Efetuado com Sucesso - Nº ' + numeroAleatorio(preco));
	document.getElementById('pfinal').innerHTML = preco.toFixed(2);
}

function confirmarPedido(){
	document.getElementById('pfinal').innerHTML = preco.toFixed(2);	
}

function numeroAleatorio() {
    return Math.floor(Math.random() * 100 + 1)
}