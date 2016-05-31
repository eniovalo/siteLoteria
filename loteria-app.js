(function (angular){
	var app = angular.module('LoteriaApp', []);
	var controller = app.controller('LoteriaController', LoteriaController);

    controller.$inject = ['$scope'];

	function LoteriaController($scope){
		var vm = this;
		
		//atributos.
		vm.jogo = {
			menorNumero: 1,
			maiorNumero: 60,
			quantidadeNumeros: 6
		};
		vm.jogoGerado = null;
		
		//Metodos.
		vm.gerarJogo = gerarJogo;
		
		function gerarJogo() {
			vm.jogoGerado = [];
			var dataAtual = new Date();
			
			adicionarNumero(dataAtual.getMilliseconds());
			
			adicionarNumero(dataAtual.getMilliseconds() * 
							dataAtual.getSeconds());
							
			adicionarNumero(dataAtual.getMilliseconds() * 
							dataAtual.getSeconds() * 
							dataAtual.getMinutes());
							
			adicionarNumero(dataAtual.getMilliseconds() * 
							dataAtual.getSeconds() * 
							dataAtual.getMinutes() *
							dataAtual.getHours());
							
			adicionarNumero(dataAtual.getMilliseconds() * 
							dataAtual.getSeconds() * 
							dataAtual.getMinutes() *
							dataAtual.getHours() *
							dataAtual.getDate());

			adicionarNumero(dataAtual.getMilliseconds() * 
							dataAtual.getSeconds() * 
							dataAtual.getMinutes() *
							dataAtual.getHours() *
							dataAtual.getDate() *
							(dataAtual.getMonth()+1) );
		}
		
		function validarNumero(numeroValidacao) {
			return numeroValidacao == 0 ? vm.jogo.maiorNumero : numeroValidacao;
		}
		
		function adicionarNumero(numeroAdicao) {
			vm.jogoGerado.push(validarNumero(numeroAdicao % vm.jogo.maiorNumero));
		}
	}

})(angular);

