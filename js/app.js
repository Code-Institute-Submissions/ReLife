angular.module("RelifeApp", ["ngRoute"]);

angular.module("RelifeApp").config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	
	$routeProvider.when("/", {
		templateUrl: "templates/home.html",
		controller: ""
	})
	.when("/about", {
		templateUrl: "templates/about.html",
		controller: ""
	})
	.when("/faq", {
		templateUrl: "templates/faq.html",
		controller: ""
	})
	.when("/contact", {
		templateUrl: "templates/contact.html",
		controller: ""
	})
	.when("/register", {
		templateUrl: "templates/register.html",
		controller: "RegistrationController"
	})
	.otherwise({
		redirectTo: "/"
	});
});