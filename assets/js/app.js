angular.module('myApp', ['ui.router']);

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
(function() {
    'use strict';

	angular.module('myApp')
	.controller('getPriceController', ['orderByFilter',getPriceController]);

	function getPriceController(orderBy){
		var gp = this;
		gp.height = 0;
		gp.nearestData = Array();
		function getNearestIndex(dt){
			var h = gp.height;
			var min = Math.abs(dt[0].x - h);
			var min_i = 0;
			for (var i = 1; i < dt.length; i++) {
				let temp_min = Math.abs(dt[i].x - h);
				if(temp_min < min){
					min = temp_min;
					min_i = i;
				}
			}
			return min_i;
		}
		function getNearestPriceList(){
			var dt = orderBy(gp.data, 'x');
			console.log(dt);
			var i = getNearestIndex(dt);
			gp.nearestData = Array();
			if(typeof dt[i-2] !== 'undefined')
				gp.nearestData.push(dt[i-2]);
			if(typeof dt[i-1] !== 'undefined')
				gp.nearestData.push(dt[i-1]);
			if(typeof dt[i] !== 'undefined')
				gp.nearestData.push(dt[i]);
			if(typeof dt[i+1] !== 'undefined')
				gp.nearestData.push(dt[i+1]);
			if(typeof dt[i+2] !== 'undefined')
				gp.nearestData.push(dt[i+2]);
		}		
		gp.getPrice = function(){
			gp.data = [
				{x: 6,y: 600},
				{x: 4,y: 500},
				{x: 5,y: 600},
				{x: 8,y: 700},
				{x: 7,y: 700},
				{x: 10,y: 900},
				{x: 11,y: 1100},
				{x: 12,y: 1100},
				{x: 9,y: 900}
			];
			var res = getRegression(gp.height, gp.data);
			if(!gp.height || gp.height == 0){
				gp.predictedPrice = "Enter a valid Height";
				gp.nearestData = Array();
			}else if(isNaN(gp.height)){
				gp.predictedPrice = "The height is not a number";
				gp.nearestData = Array();
			}else{
				gp.predictedPrice =  ('P' + Math.round(res).toFixed(2));
				getNearestPriceList();
			}
		}
		
		function getSummation(arr){
			var sum = 0;
			for (var i = 0; i < arr.length; i++) {
				sum += arr[i];
			}
			return sum;
		}
		function getRegression(given, data){
			var arr_x = new Array(),
			 	arr_y = new Array(),
			 	arr_xy = new Array(),
			 	arr_x2 = new Array(),
			 	arr_y2 = new Array();
			var n = data.length;
			var a;
			var b;

			/* set arrays*/
			for (var i = 0; i < data.length; i++) {
				arr_x.push(data[i].x);
				arr_y.push(data[i].y);
				arr_x2.push(data[i].x * data[i].x);
				arr_y2.push(data[i].y * data[i].y);
				arr_xy.push(data[i].x * data[i].y);
			}
			var sum_x = getSummation(arr_x);
			var sum_y = getSummation(arr_y);
			var sum_x2 = getSummation(arr_x2);
			var sum_y2 = getSummation(arr_y2);
			var sum_xy = getSummation(arr_xy);
			a = (((sum_y * sum_x2) - (sum_x * sum_xy)) / ((n * sum_x2) - (sum_x * sum_x)));
			b = (((n * sum_xy) - (sum_x * sum_y))/ ((n * sum_x2) - (sum_x * sum_x)));

			var result = (a + (b * given));
			return result;
		}
	}
	

})();

(function(){
	'use strict';
	angular.module('myApp')
	.factory('priceModel', priceModel);
	
	function priceModel(){
		
	}

})();