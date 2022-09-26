
// const productData = require("../data/productData.json");//product data is also needed in this file//we dont need this cuz aba hami file ko data use gardainam, model ko data use garchau 
const ProductModel = require('../models/ProductModel');

//database samma data lina jana ni asynchronous kaam ho 
const returnAllProducts = async (req,res) => {
  const productData=await ProductModel.find();


// const returnAllProducts = (req, res) => {
    const { category } = req.query;
    if (category) {
      const filteredProducts = productData.filter((product) => {
        return product.category === category;
      });
      res.json(filteredProducts);
    } else {
      res.json(productData);
    }
}


const returnSingleProduct = async (req,res)=> {
const productData = await ProductModel.find();
  // const returnSingleProduct = (req, res) => {
    //1. Destructure productID from req.params   //api/product/1 tyo slash pachi ko q lai req parameter ho 
    const { productID } = req.params;
    //2. Filter product from the array
    const selectedProduct = productData.find({_id : productID});
     
    
    if (selectedProduct) {
      res.json(selectedProduct);
    } else {
      res.send("Index doesn't exist");
    }}
  

   
  // const createProduct = (req,res) => {
    // console.log(req.body);//frontend bata pathaune ta request ho 
    // res.send("Data Received");//respond
// }
const createProduct = async (req, res) => { //data haru fetch garda ki ta lida dabase bata teti bela asynchrounous huncha and async sangai await nilekhna parcha
try {
  //frontend bata post gareko data req.body databse ma create bhayo ani tyo data che result ma create bhayo and then frontend lai pathaidiyo
  const result = await ProductModel.create(req.body);
  res.json(result);
}
catch (err){
  res.json(err);
}
};
  const updateProduct = async (req,res) => {
    const {productID} = req.params;
    try{
      const result = await ProductModel.findByIdAndUpdate(productID, req.body,{new: true});
      res.json(result);
    }catch (err) {
      res.json(err);
    }
  };
  
  const deleteProduct = async (req,res) => {
    const {productID} = req.params;
    try{
      const result = await ProductModel.findByIdAndDelete(productID);
      res.json(result);
    }catch (err) {
      res.json(err);
    }
  };

  module.exports = {
    returnAllProducts, 
    returnSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct,
  } 