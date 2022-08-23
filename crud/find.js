require("../connection.js");
const Product = require("../models/Product.js");

async function main() {
  const products = await Product.find({ name: "Laptop" });
  console.log(products);
}

main();
