var RadioSkyApp = angular.module('RadioSkyApp',['ngRoute']) ; 


// Configuration le routing 

RadioSkyApp.config(['$routeProvider' , function($routeProvider){



$routeProvider
			.when('/Meteo', {
				templateUrl  : './Views/Meto.html'
			})
			.when('/Programme', {
				templateUrl : './Views/Programme.html'
			})
			.when('/Contact', {
				templateUrl : './Views/Contact.html'
			})
			.when('/', {
				templateUrl : './Views/index.html',
				controller : 'MeteoController'

			})			

}]);

// controlleur de programme 


RadioSkyApp.controller("ProgrammeController",['$scope','$location',function($scope,$location){

$scope.watchinyoutube = function(P) {

url = "https://www.youtube.com/playlist?list=" + P.id;
location.href = url;
}// end of function 

$scope.Programme = [

{

		nom : 'Studio Mala3eb',
		heure : '14:00', 
		id : "PLGR1X3r4DzXHEXC4DQuAcy0sXCEM1QqQ9"
} , 
{
	nom :  'akhbar ta9es',
	heure : '15:30',
		id : "PLGR1X3r4DzXHEXC4DQuAcy0sXCEM1QqQ9"
} , 
{
	nom : 'akhbar Jihet ',
	heure : '16:00', 
	id : "PLGR1X3r4DzXHEXC4DQuAcy0sXCEM1QqQ9"
}

];




// end of Programme Controller
}]);



RadioSkyApp.directive('rville',[function() {
	return {

		restrict : 'E', 
		scope: {
			weather : '=',
			title: '='
		}, 
		templateUrl: './Views/random.html' , 
		controller: function($scope) {
				$scope.random = Math.floor(Math.random() * 23)

		}
	};

}]);



// Controler of Meteo


RadioSkyApp.controller("MeteoController",['$scope' , '$http' , function($scope,$http){


$http.get("./script/weather.json")
.then(function(response) {

	$scope.weather = response.data ; 

})


}]);





