const mongoose = require('mongoose');




const etudiantSchema = new mongoose.Schema({
  name : {
            type : String,
            required : true,
            trim:true,
            uppercase:true

          },
  first_name :{
              type : [String],
              required : true,
              get : v => v.join(', '),
          },
  student_number : {
            type : Number,
            required : true,
            unique:true

          },

});

// export the schema
module.exports = etudiantSchema;
