angular.module('lector.controllers',['ionic','ngCordova'])
.controller("lectorcontroller",function($scope,$cordovaBarcodeScanner){
	$scope.leerCodigo = function(){
//ejecuta el lector
	$cordovaBarcodeScanner.scan().then(function(imagenScaneada){
		alert(imagenScaneada.text);

	}, function(error){
		alert("error de lectura: "+ error);

	}) ;

} ;

});
