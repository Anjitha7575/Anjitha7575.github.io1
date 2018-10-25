angular.module('ionos.common.ViewController',[]).controller('ViewController', function($scope, $rootScope, $stateParams, $state, CommonService) {
    
    $scope.getAllheaders = function(){
  $scope.headerInfo= CommonService.getAllUersHeaders();
  }
		$scope.oneBookDetail = function(){
  		console.log($stateParams.myParam);
  		$scope.oneBookDetail = $stateParams.myParam;
  		$scope.viewDetails = CommonService.getOneBookDetails($scope.oneBookDetail);
		}

		$scope.backtoMain =function(){
			$state.go('todo');
		}

		$scope.oneBookDetail();
      $scope.getAllheaders();

		
    
  });