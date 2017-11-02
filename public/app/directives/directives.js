'use strict';

//Lo primero que tenemos que hacer es crear un módulo y ahí guardaremos nuestra directiva, 
//la forma de crear una directiva es la siguiente:

angular.module('directivesModule', [])
	
	.directive('buttonPet', function(){  //el método .directive requiere dos parámetros, el primero es el nombre de la directiva y el segundo es la función
		return {
			restrict : 'E',
			replace : true,
			scope: {
				click: '=',
				show: '=',
				value: '@'
			},	
			template : '<input type="button" data-ng-show="show" data-ng-click="click" value="{{value}}">'
		}
	})
	
	.directive('labelImput', function(){
		return{
			
			restric : 'E',
			replace: true,
			scope:{
				model:'=',
				label: '@',
				value: '@',
				placeholder:'@'
			},
			template: '<span>{{label}}<input type="text" data-ng-model="model" placeholder="{{placeholder}}" ></span>'
		}

	})



/*propiedades de las directivas:

*restrict: ('A' por atributo,'E'por elemento personalizado ),
*template: especifica el código HTML que se compilará en el ámbito de la directiva aplicando las propiedades definidas también en el ámbito de la misma
*replace
*scope
*/