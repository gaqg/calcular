var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('params', {});
});

router.get('/:v1:op:v2', function(req, res, next) {
	var var1= req.params.v1;
	var operator= req.params.op;
	var var2= req.params.v2;

	switch(operator){
		case "+":
		resultado=Number(var1)+Number(var2);
		break;
		case "-":
		resultado=var1-var2;
		break;
		case "*":
		resultado=var1*var2;
		break;

	}
  res.render('calcular', {resu: resultado});
});

router.get('/:v1/:v2', function(req, res, next) {
	var var1= req.params.v1;
	var var2= req.params.v2;

	
		resultado=Number(var1)/Number(var2);
		

	
  res.render('calcular', {resu: resultado});
});

router.get('/:v1:op:v2:op2:v3', function(req, res, next) {
	var var1= req.params.v1;
	var operator= req.params.op;
	var var2= req.params.v2;
	
	var operator2= req.params.op2;
	var var3= req.params.v3;
	var resultado = 0;


	switch(operator){
		case "+":
		resultado=Number(var1)+Number(var2);
		break;
		case "-":
		resultado=var1-var2;
		break;
		case "*":
		resultado=var1*var2;
		break;

	}
	switch(operator2){
		case "+":
		resultado=Number(resultado)+Number(var3);
		break;
		case "-":
		resultado=resultado-var3;
		break;
		case "*":
		resultado=resultado*var3;
		break;

	}
  res.render('calcular', {resu: resultado});
});

module.exports = router;