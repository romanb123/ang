var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

// get all posts
router.get('/allposts', function(req, res, next) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
      db.close();
    });
  });
});

// get onepost posts
router.get('/onepost/:id', function(req, res, next) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var ObjectId = require('mongodb').ObjectID;
    dbo.collection("customers").find( {"_id":ObjectId(req.params.id)} ).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
      db.close();
    });
  });
});

module.exports = router;
