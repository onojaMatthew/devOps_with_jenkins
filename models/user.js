const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: { type: String, required: [ true, "User name is required" ]},
  lastName: { type: String, required: [ true, "Your last name is required" ]},
  email: { type: String, unique: [ true, "Email is already taken" ]},
  password: { type: String, required: [ true, "Password is required" ], minlength: 5, maxlength: 40 },
  projects: [{ type: String }]
});

const User = mongoose.model("User", userSchema);

exports.User = User;