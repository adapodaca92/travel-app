const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const pinRoute = require("./routes/pins");
const userRoute = require("./routes/users");

const PORT = process.env.PORT || 3001;

dotenv.config();

app.use(express.json());

mongoose.set('strictQuery', false);

mongoose
  .connect(process.env.DATABASE_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Database connected.");
  })
  .catch((err) => console.log(err));

app.use("/api/pins", pinRoute);
app.use("/api/users", userRoute);

app.listen(PORT, () => {
  console.log("Backend server is running.");
});
