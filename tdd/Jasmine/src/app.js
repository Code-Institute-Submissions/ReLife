angular.module("RelifeApp", ["ngRoute", "RouteControllers"]);

angular.module("RelifeApp").config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	
	$routeProvider.when("/", {
		templateUrl: "templates/home.html"
		
	})
	.when("/about", {
		templateUrl: "templates/about.html"
		
	})
	.when("/faq", {
		templateUrl: "templates/faq.html"
		
	})
	.when("/contact", {
		templateUrl: "templates/contact.html"
		
	})
	.when("/register", {
		templateUrl: "templates/register.html",
		controller: "RegistrationController"
	})
	.when("/fail", {
		templateUrl: "templates/fail.html"
		
	})
	.when("/success", {
		templateUrl: "templates/success.html",
		
	})
	.otherwise({
		redirectTo: "/"
	});
});