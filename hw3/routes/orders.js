//Penny S
var express = require('express');
var router = express.Router();

myArray = {"data":[
	{topping: 'cherry', quantity: 2},
	{topping: 'pain', quantity: 6},
	{topping: 'chocolate', quantity: 3}
]};

router.post('/', function(req, res, next) {
	res.send(myArray);
});

/*router.get('/', function(req, res, next) {
	res.send(myArray);
});*/

module.exports = router;

/*//gets the listing order
route.post('/', function(req, res, next) { 
	//unchangeable order objects that have topping and
	//quantity as properties
	const orderArray = [
		{topping: 'cherry', quantity: 2},
		{topping: 'pain', quantity: 6},
		{topping: 'chocolate', quantity: 3}
	];
	//converts the response to JSON
	res.setHeader('Content-Type', 'application/json');
	//converts the objects into JSON string
	res.send(JSON.stringify(orderArray));
});

module.exports = route;*/
