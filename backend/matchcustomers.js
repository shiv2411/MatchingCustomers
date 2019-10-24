//creating API to get the list of customers within 100km of Dublin

const express = require('express');
const app = express();
var fs = require('fs');
const distanceCalculator = require('./helper');

module.exports = app.get('/matchingCustomers', (req, res) => {
  var mytext = fs.createReadStream('Customers _Assignment_Coding Challenge.txt')
  var matchingcustomers = []; //declared empty array where the matching Customers will be added
  mytext.on('data', function (data) {
    data = data.toString()
    var lines = data.split('\n')
    for (var i = 0; i < lines.length; i++) {
      //parsing the string data in JSON form
      var json1 = JSON.parse(lines[i]);

      //calling the distanceCalculator function to calculate distance between the given user and Dublin 

      var distance = distanceCalculator(53.339428, -6.257664, json1.latitude, json1.longitude)


      if (distance < 100) {
        var json = { "user_id": json1.user_id, "name": json1.name };
        var stringified = JSON.stringify(json)

        // customers in JSON object whose distance is within 100km from Dublin
        matchingcustomers.push(JSON.parse(stringified))
      }
    }

    //sending the response of matchingcustomers sorted ascending order by userid
    res.send(matchingcustomers.sort(function (a, b) { return a.user_id - b.user_id }));
  })
});