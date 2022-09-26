//by default yeta derai code halirako thiyo which will make it clustered
const express = require("express");
const cors = require ('cors');// Cross-origin resource sharing (CORS) allows AJAX requests to skip the Same-origin policy and access resources from remote hosts.
const productRouter = require(`./routes/productRoutes`)
const connectDatabase = require(`./database/connection`);
const { connect } = require("mongoose");
const PORT = 3000;

const app = express();  //app is a variable//up app che khas ma server ho euta server banako and to make alittle cleaner and better another department is made named routes

//creating api//all deleted from this file and sent to productRoutes.js just to make it easier to make projectt his time

app.use(cors());

app.use(express.json());//required to access json data in post function 
//use route


app.use("/api/products",productRouter);


//connect to database

connectDatabase()
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
