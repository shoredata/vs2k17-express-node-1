'use strict';
var express = require('express');
var router = express.Router();

// item4 is for statup instead of broken image placeholder, also when image is clicked on
var getData = function () {
  var data = {
    'item1': 'http://public-domain-photos.com/free-stock-photos-1/flowers/cactus-76.jpg',
    'item2': 'http://public-domain-photos.com/free-stock-photos-1/flowers/cactus-77.jpg',
    'item3': 'http://public-domain-photos.com/free-stock-photos-1/flowers/cactus-78.jpg',
    'item4': 'http://public-domain-photos.com/free-stock-photos-1/flowers/cactus-72.jpg'
  }
  return data;
}


/* GET home page. */
//router.get('/', function (req, res) {
//    res.render('index', { title: 'Express' });
//});
var requests = 0;
router.get('/', function (req, res) {
  requests++;
  console.log("\r\nRequests:", requests, " URL:", req.url, "method:", req.method);
  res.render('index', {
    title: 'Express - ExpressApp1 via Visual Studio 2015, Javascript Node Express 4 Template for Azure', "data": getData()
  });
});

module.exports = router;
