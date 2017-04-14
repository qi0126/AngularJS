var app =angular.module('myApp',[]);
app.controller('myCtrl',function($scope){
  $scope.firstName = "iverson";
  $scope.lastName = "qiminghua";
  $scope.fullName = function(){
    return $scope.firstName + " " + $scope.lastName;
  }
});

angular.module('myApp001',[]).controller('namesCtrl',function($scope){
  $scope.names=[
    {name:'Jane',Country:'Norway'},
    {name:'Jane',Country:'Norway'},
    {name:'Jane',Country:'Norway'}
  ];
});

// angular.module('myApp', []).controller('namesCtrl', function($scope) {
//     $scope.names = [
//         {name:'Jani',country:'Norway'},
//         {name:'Hege',country:'Sweden'},
//         {name:'Kai',country:'Denmark'}
//     ];
// });
