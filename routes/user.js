var User = require('../models/user');

exports.list = function(req, res){
  res.send({a: "dcm"});
};

exports.register = function (req, res, next) {
	console.log('res');
	var username = req.body.username;
  var password = req.body.password;
  var usera = {
    username: req.body.username,
    password: req.body.password,
  };
  User.findOne({
		'username': username,
	}, function(err, user) {
		if (err) {
			res.send(err.toString());
		}
		if (user != null) {
			res.send('The username is existed !');
		} else {
			User.create(usera, function (err, user) {
			    if (err) {
			      return next(err);
			    }
			    if(req.xhr) {
			      return res.send('OK');
			    }
			    res.redirect('/');
			});
		}
	});  
}

exports.login = function (req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
	console.log(''+username);
  User.findOne({
		'username': username
	}, function(err, user) {
		if (err) {
			res.send(err.toString());
		}
		if (user == null) {			
			res.send('The username is not registerd !');
		} else
		if (user.password == password) {
			res.send('login success');
		} else {
			res.send('The password is wrong !');
		}
	});
}