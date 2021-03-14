var express = require("express");
var router = express.Router();

var MongoClient = require("mongodb").MongoClient;
var url =
  "mongodb+srv://salih123:salih123@cluster0.ngbtu.mongodb.net/test?authSource=admin&replicaSet=atlas-ck0izo-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";

router.get("/", (req, res, next) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("<database>");
    dbo
      .collection("collection1")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        console.log("Mongo data coming in hot");
        console.log(result);
        res.json(result);
        db.close();
      });
  });
});

module.exports = router;
