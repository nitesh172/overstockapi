const express = require("express")
require("./db/conn")
const Product = require("./models/products")
const Popular = require("./models/popular")
const Page = require("./models/pages")
const app = express()
const port = process.env.PORT || 3000

const cors = require("cors")

app.use(cors())

app.use(express.json())

app.get("/", (req, res) => {
  res.send("hello from the other sideby Nitesh")
})

// create a new product
app.post("/products", (req, res) => {
  console.log(req.body)
  const pro = new Product(req.body)
  pro
    .save()
    .then(() => {
      res.status(201).send(pro)
    })
    .catch((e) => {
      res.status(201).send(e)
    })
})

// create a popular
app.post("/popular", (req, res) => {
  console.log(req.body)
  const pop = new Popular(req.body)
  pop
    .save()
    .then(() => {
      res.status(201).send(pop)
    })
    .catch((e) => {
      res.status(201).send(e)
    })
})

// create a page
app.post("/page", (req, res) => {
  console.log(req.body)
  const pp = new Page(req.body)
  pp.save()
    .then(() => {
      res.status(201).send(pp)
    })
    .catch((e) => {
      res.status(201).send(e)
    })
})

// get prodoucts
app.get("/products", async (req, res) => {
  try {
    const productsData = await Product.find()
    console.log(productsData)
    res.send(productsData)
  } catch (error) {
    res.send(error)
  }
})

// get popular
app.get("/popular", async (req, res) => {
  try {
    const popularData = await Popular.find()
    console.log(popularData)
    res.send(popularData)
  } catch (error) {
    res.send(error)
  }
})

// get Pages
app.get("/page", async (req, res) => {
  try {
    const pagesData = await Page.find()
    console.log(pagesData)
    res.send(pagesData)
  } catch (error) {
    res.send(error)
  }
})

// get individaul Pages
app.get("/page/:pageName", async (req, res) => {
  try {
    const pageName = req.params
    const pageData = await Page.findOne(pageName)
    console.log(pageData)
    if (!pageData) {
      return res.status(404).send()
    } else {
      res.send(pageData)
    }
  } catch (error) {
    res.send(error)
  }
})
// get individaul Pages By Catergory
app.get("/products/category=:sub_catergory", async (req, res) => {
  try {
    const sub_catergory = req.params
    const catData = await Product.findOne(sub_catergory)
    console.log(catData)
    if (!catData) {
      return res.status(404).send()
    } else {
      res.send(catData)
    }
  } catch (error) {
    res.send(error)
  }
})

app.listen(port, () => {
  console.log(`connection is setup at ${port}`)
})
