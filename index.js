require("./connection.js");

const Product = require("./models/Product.js");

// creo el producto
const product = new Product({
  name: "Laptop",
  description: "MacBook Air Pro, 256 gb",
  price: 2500,
});

//lo guardo en la base de datos
/* product.save((err, document) => {
  if (err) console.log(err);
  console.log(document);
}); */

product
  .save()
  .then((document) => console.log(document))
  .catch((err) => console.log(err));
