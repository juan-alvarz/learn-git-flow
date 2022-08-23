require("../connection.js");

const Product = require("../models/Product.js");

const someFunction = async () => {
  const result1 = await Product.deleteMany({ name: "keyboard" });
  console.log(result1);
  const result2 = await Product.deleteOne({ name: "Laptop" });
  console.log(result2);
};

someFunction();
