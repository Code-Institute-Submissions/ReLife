angular.module('RouteControllers',[])
    .controller('RegistrationController', function($scope, $location, $timeout) {
    	
    	$scope.modalSubmit = function() {
	        if ($scope.regForm.$valid) {
	            $timeout(submitForm, 5000);
            }
        };

    	var submitForm = function() {   		

    	    if ($scope.citizenNo != null ||
    			$scope.angina != null ||
    			$scope.cancer != null ||
    			$scope.cPalsy != null ||
    			$scope.copd != null ||
    			$scope.cysticF != null ||
    			$scope.dish != null ||
    			$scope.heartDis != null ||
    			$scope.hivAids != null ||
    			$scope.ibs != null ||
    			$scope.kidneyF != null ||
    			$scope.lungDis != null ||
    			$scope.polio != null ||
    			$scope.anxiety != null ||
    			$scope.bronchitis != null ||
    			$scope.depression != null ||
    			$scope.ebola != null ||
    			$scope.fatigue != null ||
    			$scope.glanFever != null ||
    			$scope.pneumonia != null ||
    			$scope.sars != null ||
    			$scope.vision != null ||
    			$scope.criminalYes != null ||
    			$scope.declaration == null) {

    			$location.path("fail");
    			
    		} else {

    			$location.path("success");
    		}	
    	}
    });