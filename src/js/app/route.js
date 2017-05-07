angular.module('myApp')
.config(function($stateProvider) {
	var srcTemplate = "templates/";
  	var getPrice = {
	    name: 'getPrice',
	    url: '/getPrice',
	    templateUrl: srcTemplate + 'getprice.html'
  	}

  	var priceList = {
	    name: 'priceList',
	    url: '/priceList',
	    templateUrl: srcTemplate + 'pricelist.html'
  	}

  	$stateProvider.state(getPrice);
  	$stateProvider.state(priceList);
});