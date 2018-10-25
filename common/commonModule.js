angular.module('ionos.common',['ionos.common.AdminController','ionos.common.ViewController','ionos.common.CommonService']);


	
angular.module('ionos.common').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    
	$urlRouterProvider.otherwise('/todo');
    
    $stateProvider
      .state('todo', {
        url : '/todo',
        templateUrl : 'common/partials/todo.html',
        controller : 'AdminController'
      })
      .state('view', {
        url : '/view',
        templateUrl : 'common/partials/view.html',
        params: {myParam: null},
        controller : 'ViewController'
      });
  }]);

