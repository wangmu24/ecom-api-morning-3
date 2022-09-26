

//Creating APIs
// here there is no app variable so need to delete them and create a new variable named Router

//transferring the data
 
const express = require ('express');
//destructuring
const {returnAllProducts, returnSingleProduct,createProduct,updateProduct,deleteProduct} = require('../controllers/productControllers');
const router = express.Router();
router.get("/",returnAllProducts )//jaba call garcha teti bela all function return hunchca

  
  //Get single product data using route parameters
  router.get("/:productID", returnSingleProduct ); //all of htese are done to make the program more understanding 

  

  //when things are common , here /api/products/ is the most common so we copy them and delete and put them in app .js folder
  //post request garera prpduct create garnu parne jun che controllers ma "data received bhanera euta task garieko cha"
  router.post('/',createProduct)//create update ra delete  ko functions haru sabai controller ma lekhnu parhca
  router.patch('/:productID',updateProduct)//product id ni chaincha delete garna or update garna lai 
  router.delete('/:productID',deleteProduct)

  module.exports = router;
