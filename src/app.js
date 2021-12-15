const express = require("express");
require("./db/conn");
const Product = require("./models/products");
const Popular = require("./models/popular");
const app = express();
const port = process.env.PORT || 3000;

const cors = require("cors");

app.use(cors());

// create a new product

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from the other sideby Nitesh");
});

app.post("/products", (req, res) => {
  console.log(req.body);
  const pro = new Product(req.body);
  pro
    .save()
    .then(() => {
      res.status(201).send(pro);
    })
    .catch((e) => {
      res.status(201).send(e);
    });
});

app.post("/popular", (req, res) => {
  console.log(req.body);
  const pop = new Popular(req.body());
  pop
    .save()
    .then(() => {
      res.status(201).send(pop);
    })
    .catch((e) => {
      res.status(201).send(e);
    });
});

app.get("/products", async (req, res) => {
  try {
    const productsData = await Product.find();
    console.log(productsData);
    res.send(productsData);
  } catch (error) {
    res.send(error);
  }
});

app.get("/popular", async (req, res) => {
  try {
    const popularData = await Popular.find();
    console.log(popularData);
    res.send(popularData);
  } catch (error) {
    res.send(error);
  }
});

app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});
