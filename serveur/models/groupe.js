const mongoose = require('mongoose');

/*
 * setter for cover field in bookSchema, used to set a default value to cover field if cover is not defined
 * @param cover (string) the provided cover field
 * @return (string) the cover value
*/



// definition of schema for books
const groupeSchema = new mongoose.Schema({
  etudiant : {
            id : ObjectId,
            required : true
          },
  first_name :{
              type : numer,
              min: 1,
              max: 6,
              required : true
          },

});

// export the schema
module.exports = groupeSchema;
