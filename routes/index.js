// var Item = require('../models/item');

exports.index = function(req, res, next){
  
    res.render('selectCourse');
  
};

// exports.addItem = function (req, res, next) {
//   var item = {
//     title: req.body.title,
//     description: req.body.des,
//     dueDate: new Date(req.body.date)
//   };
//   Item.create(item, function (err, item) {
//     if (err) {
//       return next(err);
//     }
//     if(req.xhr) {
//       return res.send(item);
//     }
//     res.redirect('/');
//   });
// }

// exports.deleteItem = function (req, res, next) {
//   var id = req.params.id;
//   Item.remove({ _id: id }, function (err) {
//     if (err) {
//       return next(err);
//     }
//     res.redirect('/');
//   });
// }