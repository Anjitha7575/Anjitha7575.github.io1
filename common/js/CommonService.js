angular.module('ionos.common.CommonService',[]).factory('CommonService', ['$http','$q','testUrl','baseUrl',function($http, $q, testUrl, baseUrl){
  var viewUsrheaders =[
  {
    "header": "Book Name"
  },
  {
    "header": "Author"
  },
  {
    "header": "Published"
  }
];
	
	var bookObject = [
  {
    "name": "Book1",
    "id" : 1,
    "published":true,
    "author":"AAA"
  },
  {
    "name": "Book2",
    "id" : 2,
    "published":true,
    "author":"AAA"
  },
  {
    "name": "Book3",
    "id" : 3,
    "published":false,
    "author":"AAA"
  },
  {
    "name": "Book4",
    "id" : 4,
    "published":true,
    "author":"AAA"
  },
  {
    "name": "Book5",
    "id" : 5,
    "published":false,
    "author":"AAA"
  },
];

	var respObj = {};
	var lObj = {};
	var oObj= {};

    
    return {
      getAllUersHeaders : function(){
      return viewUsrheaders;
      },
      getBooks : function() {
        if(localStorage.getItem('bookObject') === null){
          localStorage.setItem('bookObject', JSON.stringify(bookObject));
          respObj = JSON.parse(localStorage.getItem('bookObject'));
        }else{
          respObj = JSON.parse(localStorage.getItem('bookObject'));
        }
    		return respObj;
      },

      getOneBookDetails: function(item){
        var res ={};
        var retrievedObject = JSON.parse(localStorage.getItem('bookObject'));
          angular.forEach(retrievedObject, function(obj){
            if(item.id === obj.id){
              res = obj;
            }
          });
          return res;
      },
   
      addBook : function(newbook){
      var retrievedObject = JSON.parse(localStorage.getItem('bookObject'));
      var len = retrievedObject.length;
      var newObj = {
            "name": newbook.name,
            "author": newbook.author,
            "published": newbook.published,
            "id":len + 1
            }
      retrievedObject.push(newObj);
      localStorage.setItem('bookObject', JSON.stringify(retrievedObject));
      return newObj;
    },
    updateBook : function(updateBook){
      var retrievedObject = JSON.parse(localStorage.getItem('bookObject'));
      angular.forEach(retrievedObject, function(obj){
        if(updateBook.id === obj.id){
          obj.name = updateBook.name;
          obj.author = updateBook.author;
          obj.published = updateBook.published;
        }
      });
      localStorage.setItem('bookObject', JSON.stringify(retrievedObject));
    },

    delete: function(item){
      var retrievedObject = JSON.parse(localStorage.getItem('bookObject'));
      angular.forEach(retrievedObject, function(obj,index){
        if(item.id === obj.id){
          retrievedObject.splice(index,1);
        }
      });
      localStorage.setItem('bookObject', JSON.stringify(retrievedObject));
    },

    };
    
}]);