const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: { type: String, required: true},
    color: {type: String, required: true},
    age: { type: Number, required: true}
});

module.exports = mongoose.model("Cat", schema);