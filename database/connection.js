//database sanga link hune codes che connection.js ma lekhcham

const mongoose = require ('mongoose');


const connectDatabase = () => {
        mongoose.connect('mongodb://localhost:27017/ecom_morning', (err) => {
        if (err) {
            console.log(err);
        }else{
            console.log("database connected successfully");
        }
        });
   
    
};

module.exports = connectDatabase;