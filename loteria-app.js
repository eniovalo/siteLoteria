(function (angular){
	angular
	.module('loteriaApp', [])
	.controller('loteriaController', loteriaController);

	function loteriaController($scope){
		var vm = this;
		
		vm.name = 'teste';
	};
})(angular);

