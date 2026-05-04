const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: { type: String, required: true},
    badge: {type: Number, required: true},
    rank: {type: String, required: true},
    department: {type: String, required: true},
    unit: {type: String, required: true},
    gender: {type: String, required: true},
    nationality: {type: String, required: true},
    address: {type: String, required: true},
    phone: {type: Number, required: true},
    email: {type: String, required: true},
    education: {type: String, required: true},
    city: {type: String, required: true}
    
});

module.exports = mongoose.model("PoliceOfficer", schema);