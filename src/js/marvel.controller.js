(function () {
	'use strict';
	angular
		.module('marvelApp')
		.controller('HeroesController', heroesController);
	function heroesController ($http, $log) {
		var vm = this;
		vm.heroes = [];
		var apiUrl = 'http://gateway.marvel.com/v1/public';
		var apiKey = '7909a2ff13d37c8d61e69dd9088dfabe';
		var charactersQueryString = '/characters?limit=10';
		var apiKeyQueryString = '&apikey=' + apiKey;
		$http
			.get(apiUrl + charactersQueryString + apiKeyQueryString)
			.then(displayHeroes)
			.catch(displayError)
		function displayHeroes (response) {
			vm.heroes = response.data.data.results;
			angular.forEach(vm.heroes, parseData);
		}
		function displayError (error) {
			var error = error.data; 
			$log.error('Error API', error);
		}
		function parseData (hero) {
			hero.image = hero.thumbnail.path + '.' + hero.thumbnail.extension;
		}
	}
})();