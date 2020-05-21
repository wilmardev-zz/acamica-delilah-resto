'use strict';
const model = require('./modelA');

exports.home = (req, res, next)  => {
    model.find(function(err, docs) {
        if (err) return next(err);
        res.status(200).json(docs);
    });
};

exports.search = (req, res, next)  => {
    let name = req.params.name;
    model.find({ name : name}, function(err, doc) {
        if (err) return next(err);
        res.status(200).json(doc);
    });
};

exports.update = (req, res, next)  => {
    let name = req.params.name;
    // flag i :  ignorar mayúsculas o minúsculas
    model.findOne({ name : new RegExp('^'+name+'$', "i")}, function(err, doc) {
        if (err) return next(err);
        let number  =  Math.random() * (100 - 3) + 3;
        doc.name =  doc.name + "-" + number;
        doc.save();
        res.status(200).json(doc);
    });
};

exports.update_v2 = (req, res, next)  => {
    let name = req.params.name;
    let number  =  Math.random() * (100 - 3) + 3;
    let newName =  name + "-" + number;
    model.update({ name : new RegExp('^'+name+'$', "i")} , { name : newName} , function(err, doc) {
        if (err) return next(err);
        res.status(200).json(doc);
    });
};

exports.delete = (req, res, next)  => {
    let name = req.params.name;
    model.deleteOne({ name : name} , function(err, doc) {
        if (err) return next(err);
        res.status(200).json(doc);
    });
};

exports.modelName = (req, res)  => {
  res.send('my model name is ' + model.modelName);
};

exports.insert = (req, res, next)  => {
  let name = req.params.name;
  model.create({ name : name ,  date:  Date.now() }, function(err, doc) {
    if (err) return next(err);
    res.status(201).json(doc);
  });
};

