require("./connection.js");

const Product = require("./models/Product.js");

async function main() {
  const product = new Product({
    name: "keyboard",
    description: "Coursair k68 RGB Gaming Keyboard",
    price: 250,
  });

  const productSave = await product.save();
  return productSave;
}

main()
  .then((product) => console.log(product))
  .catch((err) => console.log(err));
