(function () {
	'use strict';
	angular
		.module('marvelApp', [])
		.run(initializeApp);
	function initializeApp ($rootScope) {
		$rootScope.appTitle = 'Marvel Heroes';
	}
})();