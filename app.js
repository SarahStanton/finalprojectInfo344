var app = angular.module('finalproject', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
	$scope.test = 'Hello world!';
}]);
