// angular.module("TagStation").controller("consultaWatsonCtrl", function($scope, $http){
//     $scope.title = "Teste do controller consultaWatsonCtrl";
// });

angular.module("TagStation").controller("consultaWatsonCtrl", function($scope, $http){
    $http.get('http://localhost:3000/consultaWatson')
    .then(function(response){
        $scope.respostaAPI = response.data;
    });
});