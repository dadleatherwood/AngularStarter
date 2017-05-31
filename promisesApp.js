angular.module('promisesApp', [])

.controller('promisesCtrl', function($scope,$http,FilmService){
  FilmService.getFilmById(1)
  .then(function(response){
    var film = response.data
    $scope.film = film
  })
})

.controller('AllFilmsController', function($scope,$http){
  var anotherPromise = $http.get("http://swapi.co/api/films/")
  console.log(anotherPromise)
  anotherPromise.then(function(response){
    var films = response.data
    console.log(films)
    $scope.films = films
  })
})

.service('FilmService', function($http){
  this.getFilmById = function(id){
    return $http.get("http://swapi.co/api/films/" + id)
  }
})
