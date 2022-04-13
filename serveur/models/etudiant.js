const mongoose = require("mongoose");

const etudiantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
  },
  first_name: {
    type: [String],
    required: true,
    set: (v) => v.split(" "),
    get: (name) => {
      name.foreach((n) => n.charAt(0).toUpperCase() + n.slice(1));
      name.join(",");
    },
  },
  student_number: {
    type: Number,
    required: true,
    unique: true,
  },
  groupe_number: {
    type: Number,
    min: 0,
    max: 6,
  },
});

// export the schema
module.exports = etudiantSchema;

const dbConnection = require("../controllers/dbConnection");
const Student = dbConnection.model("Student", etudiantSchema, "student");

module.exports.model = Student;
