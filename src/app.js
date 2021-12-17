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
  res.send(`hello from the other sideby Nitesh 
  Base Url: https://overstockapi.herokuapp.com
  Products Url:https://overstockapi.herokuapp.com/products
  Popular Url:https://overstockapi.herokuapp.com/popular
  Page Url:https://overstockapi.herokuapp.com/page
  Page Individual Url:https://overstockapi.herokuapp.com/page/pagename
  Product By category Url:https://overstockapi.herokuapp.com/products/category=
  Product By sub category Url:https://overstockapi.herokuapp.com/products/subCategory=
  Product By main sub category Url:https://overstockapi.herokuapp.com/products/mainSubCategory=
  Product By main category Url:https://overstockapi.herokuapp.com/products/mainCategory=
  Product By id Url:https://overstockapi.herokuapp.com/products/id=
  Product By name Url:https://overstockapi.herokuapp.com/products/name=`)
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

// get products By Catergory
app.get("/products/category=:catergory", async (req, res) => {
  try {
    const catergory = req.params
    const catData = await Product.find(catergory)
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

// get products By subCatergory
app.get("/products/subCategory=:sub_catergory", async (req, res) => {
  try {
    const sub_catergory = req.params
    const subCatData = await Product.find(sub_catergory)
    console.log(subCatData)
    if (!subCatData) {
      return res.status(404).send()
    } else {
      res.send(subCatData)
    }
  } catch (error) {
    res.send(error)
  }
})

// get products By main Sub Catergory
app.get("/products/mainSubCategory=:main_sub_catergory", async (req, res) => {
  try {
    const main_sub_catergory = req.params
    const mainSubCatData = await Product.find(main_sub_catergory)
    console.log(mainSubCatData)
    if (!mainSubCatData) {
      return res.status(404).send()
    } else {
      res.send(mainSubCatData)
    }
  } catch (error) {
    res.send(error)
  }
})
// get products By main Catergory
app.get("/products/mainCategory=:main_catergory", async (req, res) => {
  try {
    const main_catergory = req.params
    const mainCatData = await Product.find(main_catergory)
    console.log(mainCatData)
    if (!mainCatData) {
      return res.status(404).send()
    } else {
      res.send(mainCatData)
    }
  } catch (error) {
    res.send(error)
  }
})

// get products By name
app.get("/products/name=:name", async (req, res) => {
  try {
    const name = req.params
    const nameData = await Product.find(name)
    console.log(nameData)
    if (!nameData) {
      return res.status(404).send()
    } else {
      res.send(nameData)
    }
  } catch (error) {
    res.send(error)
  }
})

//get products Byid
app.get("/products/id=:_id", async (req, res) => {
  try {
    const _id = req.params
    const _idData = await Product.findById(_id)
    console.log(_idData)
    if (!_idData) {
      return res.status(404).send()
    } else {
      res.send(_idData)
    }
  } catch (error) {
    res.send(error)
  }
})
app.listen(port, () => {
  console.log(`connection is setup at ${port}`)
})
