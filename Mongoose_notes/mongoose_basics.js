//Mongoose is a MongoDB framework to connect MongoDB with NodeJS.

//It is a Object Data Modelling

const mongoose = require('mongoose');

mongoose.connect(mongodb://localhost:27017/<database_name>,
                { useNewUrlParser: true },      // Written only to avoid warning.
                { useUnifiedTopology: true }    // Written only to avoid warning.
                );
//The mongoose.connect() method returns a promise. Hence, we need to resolve/reject the promise.
.then(<    //some code >)
.catch((err) => {
  //Log the error.
  console.log("Error :", err);
  });

//Schema
//A mongoose schema defines the structure of
//the document, default values, validators etc.



