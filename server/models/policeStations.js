const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: { type: String, required: true},
    stationCode: {type: Number, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    phone: {type: Number, required: true},
    operationHouse: {type: String, required: true},
    vehicleCapacity: {type: Number, required: true},
    holdingCells: {type: Number, required: true},
    hasDispatchCentre: {type: String, required: true},
    officerCount: {type: Number, required: true},
    email: {type: String, required: true}
    
    
});

module.exports = mongoose.model("PoliceStation", schema);