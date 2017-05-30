angular.module('angularTest', [])

  .controller('TestController', function($scope, foodService) {
    $scope.name = 'Jacob';
    $scope.foods = foodService.getList();

    $scope.spicyFoods = $scope.foods.filter(function(val){
      return val.spicy;
    })
  })

  .service('foodService', function() {
    var privateVar = 'this is private' //private

    //makes public or viewable
    this.list = [
      {
        name: 'Burger',
        origin: 'America',
        calories: 480,
        spicy: true
      },
      {
        name: 'Pizza',
        origin: 'Chicago',
        calories: 10000000,
        spicy: false
      }
    ];

    this.getList = function () {
      return this.list;
    }

  })
