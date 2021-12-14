const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/overstock", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection is sucessfull");
}).catch((e) => {
    console.log(e);
})