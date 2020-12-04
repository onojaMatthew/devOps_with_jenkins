const { User } = require("../models/user");

exports.create = async (req, res) => {
  const { firstName, lastName, email, password, phone } = req.body;
  console.log(req.body)
  try {
    // Find a user with the email in the request body
    let user = await User.findOne({ email });
    // Check if user already exist with the email
    if (user) return res.status(400).json({ status: "fail", error: "User already exists" });

    // Create a new user
    let newUser = await new User({ 
      firstName,
      lastName,
      email, password,
      phone
    });
    // Save the new user
    newUser = await newUser.save();
    return res.json({ message: "Account created successfully", user });
  } catch (error) {
    return res.status(400).json({ status: "fail", error: error.message });
  }
}

exports.getUser = (req, res) => {
  User.find({})
    .then(user => {
      if (!user) return res.status(404).json({ error: "User not found" });
      return res.json(user);
    })
    .catch(err => {
      return res.status(400).json({ error: err.message });
    });
}