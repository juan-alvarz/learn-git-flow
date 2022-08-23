const mongoose = require("mongoose");
const MONGO_CONNECT = "mongodb://localhost:27017/mywebstore";

mongoose
  .connect(MONGO_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log(err)); //manejo del error

mongoose.connection.on("open", (_) => {
  console.log("Database is connected to", MONGO_CONNECT);
});
