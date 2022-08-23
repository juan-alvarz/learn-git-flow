require("../connection.js");
const User = require("../models/User.js");

async function getUser() {
  const user = await User.findOne({ username: "joe" });
  console.log(user);
}

getUser();
