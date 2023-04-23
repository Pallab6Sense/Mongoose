const User = require("../../Model/User/User");

exports.createUser = async () => {
  try {
    const user = await User.create({
      name: "mitu",
      age: 24,
      email: "mafujamitu71@gmail.com",
      hobbies: ["weight lifting", "bowling"],
      address: {
        street: "Main st",
      },
    });
    console.log(user);
  } catch (err) {
    console.log(err.message);
  }
};

exports.findUser = async () => {
  try {
    const user = await User.findById("644555483669751df1e1892a");
    console.log(user);
  } catch (err) {
    console.log(err.message);
  }
};
