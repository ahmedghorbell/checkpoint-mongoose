// Require mongoose
const mongoose = require("mongoose");

// Create Schema
const Schema = mongoose.Schema;

let personSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
    validate: {
      validator: function (value) {
        return value >= 0;
      },
      message: "Age must be a positive number",
    },
  },
  favoriteFoods: {
    type: [String],
    required: true,
    validate: {
      validator: function (value) {
        return value.length > 0;
      },
      message: "Favorite foods must not be empty",
    },
  },
});

// Export the model
module.exports = mongoose.model("Person", personSchema);

