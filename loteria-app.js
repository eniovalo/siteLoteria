(function (angular){
	var app = angular.module('LoteriaApp', []);
	var controller = app.controller('LoteriaController', LoteriaController);

    controller.$inject = ['$scope'];

	function LoteriaController($scope){
		var vm = this;

        //constantes
        var NAO_ENCONTRADO = -1;
		
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

            //Milisegundos
			adicionarNumero(dataAtual.getMilliseconds());
			
            //Segundos
			adicionarNumero(dataAtual.getMilliseconds() * 
							dataAtual.getSeconds());

            //Minutos
			adicionarNumero(dataAtual.getMilliseconds() * 
							dataAtual.getSeconds() * 
							dataAtual.getMinutes());

            //Horas
			adicionarNumero(dataAtual.getMilliseconds() * 
							dataAtual.getSeconds() * 
							dataAtual.getMinutes() *
							dataAtual.getHours());

            //Dia
			adicionarNumero(dataAtual.getMilliseconds() * 
							dataAtual.getSeconds() * 
							dataAtual.getMinutes() *
							dataAtual.getHours() *
							dataAtual.getDate());

            //Mês
			adicionarNumero(dataAtual.getMilliseconds() * 
							dataAtual.getSeconds() * 
							dataAtual.getMinutes() *
							dataAtual.getHours() *
							dataAtual.getDate() *
							(dataAtual.getMonth()+1) );

            //Caso a quantidade de jogos não tenha sido completada,
            //completo com base nos milisegundos.
            while(vm.jogoGerado.length < vm.jogo.quantidadeNumeros) {
                dataAtual = new Date();
                adicionarNumero(dataAtual.getMilliseconds() *
                                dataAtual.getMilliseconds());
            }
		}
		
		function tratarNumero(numero) {
            //Utilizo apenas os números que estão no range do jogo.
            var numeroGerado = numero % vm.jogo.maiorNumero;

			return (numeroGerado === 0) ? vm.jogo.maiorNumero : numeroGerado;
		}

        function validarNumero(numero) {
            //Não permito adicionar números duplicados.
			return vm.jogoGerado.indexOf(numero) === NAO_ENCONTRADO;
		}
		
		function adicionarNumero(numero) {
            var numeroAdicao = tratarNumero(numero);

            if(validarNumero(numeroAdicao)) {
                vm.jogoGerado.push(numeroAdicao);
            }
		}

	}

})(angular);
