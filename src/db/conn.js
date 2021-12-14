const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Nitesh172:5Wnd1lAtMgMhhvNh@overstock.mp2e0.mongodb.net/overstock?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection is sucessfull");
}).catch((e) => {
    console.log(e);
})