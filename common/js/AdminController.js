angular.module('ionos.common.AdminController',[]).controller('AdminController', function($scope, $rootScope, $stateParams, $state, $filter, CommonService) {
    
    $scope.getAllheaders = function(){
	$scope.headerInfo= CommonService.getAllUersHeaders();
	}
		
	$scope.getBooks =  function(){
		$scope.allBooks = CommonService.getBooks();
	}

	$scope.addBook = function(newBook){
		CommonService.addBook(newBook);
			$scope.getBooks();
		alert('Added Successfully !!');
		init();
	}

	$scope.updateBook = function(item){
		CommonService.updateBook(item);
			$scope.getBooks();
			alert('Updated Successfully !!');
	}

	$scope.viewDetails = function(item){
		$state.go('view', {myParam: {id:item.id, name:item.name}});
	}

	$scope.delete = function(item){
		CommonService.delete(item);
			$scope.getBooks();
			alert('Deleted Successfully !!');
	}

	function init(){
			$scope.newBook ={name:"",author:"",published:false};
	}

	$scope.getBooks();
	$scope.getAllheaders();

	init();


	

    



  })
	
