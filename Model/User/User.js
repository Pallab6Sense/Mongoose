/* This code is defining a Mongoose schema for a user object with various properties such as name, age,
email, createdAt, updatedAt, bestFriend, hobbies, and address. It also sets up validation rules for
some of the properties. Finally, it exports a Mongoose model for the user schema. */
const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 1,
    max: 100,
    validate: {
      validator: (v) => v % 2 === 0,
      message: (props) => `${props.value} is not a even number`,
    },
  },
  email: {
    type: String,
    minLength: 10,
    lowercase: true,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: { 
    type: Date,
    default: () => Date.now(),
  },
  bestFriend: mongoose.SchemaTypes.ObjectId,
  hobbies: [String],
  address: {
    street: String,
    city: String,
  },
});

module.exports = model("User", userSchema);
