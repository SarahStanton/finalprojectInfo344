'use strict'

var app = angular.module('finalproject', ["ui.router", "ngAnimate"]);


app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

		$stateProvider.state(
			"home", {
				url: "/",
				templateUrl: "./partials/home.ejs",
				controller: "HomeCtrl"
			}
		).state(
			"feed", {
				url: "/feed",
				templateUrl: "./partials/feed.ejs",
				controller: "FeedCtrl"
			}
		).state(
			"likes", {
				url: "/likes",
				templateUrl: "./partials/likes.ejs",
				controller: "LikesCtrl"
			}
		).state(
			"location", {
				url: "/location",
				templateUrl: "./partials/details.ejs",
				controller: "ListCtrl"
			}
		)
		$urlRouterProvider.otherwise("/");
}]);


// Handles manipulation of all of the user info
app.factory("user", ["$http", function($http){
	var data = [];

	return {
		signIn: function(userInfo) {

		},
		getFavorites: function() {

		},
	};
}]);

app.factory("LikesService", [function() {

	var data = [];

	// Helper function to get the index of the given like
	var getLikeIndex = function(likes) {
		return _.findLastIndex(data, like);
	};

	return {
		setLikes: function(likes) {
			data = likes;
		},
		getLikes: function() {
			return data;
		},
		like: function(likes) {
			var count = 0;
			for (var i = 0; i < data.length; i++) {
				if (data[i].favorite == true) {
					count += 1;
				}
			};
			var index = getLikeIndex(likes);
		}
	};

}]);



// Controller for index page
// Global scope to know when a user is signed in
app.controller("MainCtrl", ["$scope", "LikesService", function($scope, LikesService) {

	$scope.isSignedIn = true;

	// Easy tag-click navigation
	$scope.tagClick = function(tag) {
		$scope.clickedTag = tag;
	};

}]);

// Controller for the home page
app.controller("HomeCtrl", ["$scope", "LikesService", function($scope, LikesService) {


}]);


// Controller for the feed page
app.controller("FeedCtrl", ["$scope", "user", function($scope, user) {

}]);

// Controller for the List page
app.controller("ListCtrl", ["$scope", "user", "stateParams", function($scope, user, stateParams) {

}]);
// Controller for the details page
app.controller("DetailsCtrl", ["$scope", "user", "stateParams", function($scope, user, stateParams) {

}]);

app.controller("LikesCtrl", ["$scope", "user", "LikesService", function($scope, user, LikesService) {

	$scope.likes = LikesService.getLikes();

	$scope.areLikes = function() {
		var exists = false;
		_.each($scope.likes, function(likes) {
			if (!exists && likes.likes) {
				exists = true;
			}
		});
		return exists;
	};

	// Handles favoriting/unvfavoriting a channel
	// Can only have 10 favorites at a time
	$scope.likes = function(likes) {
		LikesService.likes(likes);
	};
}]);








