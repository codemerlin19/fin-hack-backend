/**
 * Created by shubham on 13/2/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var connection = mongoose.createConnection('mongodb://127.0.0.1:27017/moneyManager');


var Locations = new Schema({
    userNo: Number,
    latitude: Number,
    longitude: Number,
    place: String
});

module.exports = mongoose.model('Locations', Locations);
