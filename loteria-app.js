(function (angular){
	var app = angular.module('LoteriaApp', []);
	var controller = app.controller('LoteriaController', LoteriaController);

    controller.$inject = ['$scope'];

	function LoteriaController($scope){
		var vm = this;

        console.log('teste');
		
		vm.name = 'teste';
	}

})(angular);
