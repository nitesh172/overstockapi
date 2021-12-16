const mongoose = require("mongoose");
const validator = require("validator");

const pageSchema = new mongoose.Schema({
  pageName: {
    type: String,
    required: true,
  },
  imgURL: {
    type: String,
    required: true,
  },
  img1: {
    type: String,
    required: true,
  },
  img2: {
    type: String,
    required: true,
  },
  text1: {
    type: String,
    required: true,
    minlength: 10,
  },
  text2: {
    type: String,
    required: true,
  },
  text3: {
    type: String,
    required: true,
  },
  text4: {
    type: String,
    required: true,
  },
  catergory: {
    type: Array,
    required: true,
    c1: {
      type: Object,
      required: true,
      name: { type: String, required: true },
      imgUrl: { type: String, required: true },
    },
    c2: {
      type: Object,
      required: true,
      name: { type: String, required: true },
      imgUrl: { type: String, required: true },
    },
    c3: {
      type: Object,
      required: true,
      name: { type: String, required: true },
      imgUrl: { type: String, required: true },
    },
    c4: {
      type: Object,
      required: true,
      name: { type: String, required: true },
      imgUrl: { type: String, required: true },
    },
    c5: {
      type: Object,
      required: true,
      name: { type: String, required: true },
      imgUrl: { type: String, required: true },
    },
    c6: {
      type: Object,
      required: true,
      name: { type: String, required: true },
      imgUrl: { type: String, required: true },
    },
    c7: {
      type: Object,
      required: true,
      name: { type: String, required: true },
      imgUrl: { type: String, required: true },
    },
    c8: {
      type: Object,
      required: true,
      name: { type: String, required: true },
      imgUrl: { type: String, required: true },
    },
    c9: {
      type: Object,
      required: true,
      name: { type: String, required: true },
      imgUrl: { type: String, required: true },
    },
    c10: {
      type: Object,
      required: true,
      name: { type: String, required: true },
      imgUrl: { type: String, required: true },
    },
    c11: {
      type: Object,
      required: true,
      name: { type: String, required: true },
      imgUrl: { type: String, required: true },
    },
    c12: {
      type: Object,
      required: true,
      name: { type: String, required: true },
      imgUrl: { type: String, required: true },
    },
  },
  imb1: {
    type: Object,
    required: true,
    imgUrl: { type: String, required: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
  },
  imb2: {
    type: Object,
    required: true,
    imgUrl: { type: String, required: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
  },
  moreCategory: {
    type: Array,
    required: true,
    c1: {
      type: Object,
      required: true,
      name: { type: String, required: true },
      imgUrl: { type: String, required: true },
    },
    c2: {
      type: Object,
      required: true,
      name: { type: String, required: true },
      imgUrl: { type: String, required: true },
    },
    c3: {
      type: Object,
      required: true,
      name: { type: String, required: true },
      imgUrl: { type: String, required: true },
    },
    c4: {
      type: Object,
      required: true,
      name: { type: String, required: true },
      imgUrl: { type: String, required: true },
    },
    c5: {
      type: Object,
      required: true,
      name: { type: String, required: true },
      imgUrl: { type: String, required: true },
    },
    c6: {
      type: Object,
      required: true,
      name: { type: String, required: true },
      imgUrl: { type: String, required: true },
    },
    c7: {
      type: Object,
      required: true,
      name: { type: String, required: true },
      imgUrl: { type: String, required: true },
    },
    c8: {
      type: Object,
      required: true,
      name: { type: String, required: true },
      imgUrl: { type: String, required: true },
    },
    c9: {
      type: Object,
      required: true,
      name: { type: String, required: true },
      imgUrl: { type: String, required: true },
    },
    c10: {
      type: Object,
      required: true,
      name: { type: String, required: true },
      imgUrl: { type: String, required: true },
    },
    c11: {
      type: Object,
      required: true,
      name: { type: String, required: true },
      imgUrl: { type: String, required: true },
    },
    c12: {
      type: Object,
      required: true,
      name: { type: String, required: true },
      imgUrl: { type: String, required: true },
    },
  },
});

// we will create a new collection

const Page = new mongoose.model("Page", pageSchema);

module.exports = Page;
