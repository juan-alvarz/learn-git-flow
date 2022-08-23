require("./connection.js");

const User = require("./models/User.js");

async function createUsers() {
  const userOne = new User({
    username: "Donasace",
    password: "12345",
  });
  await userOne.save();

  const userTwo = new User({
    username: "Cameron",
    password: "securepassword",
  });
  await userTwo.save();
}

createUsers();
