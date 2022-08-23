require("../connection.js");
const Product = require("../models/Product.js");

const createProduct = async () => {
  const laptopOne = new Product({
    name: "Laptop",
    description: "htp Pavilion 15",
  });
  await laptopOne.save();

  const laptopTwo = new Product({
    name: "Laptop",
    description: "Lenovo x20",
  });
  await laptopTwo.save();
};

createProduct();
