const mongoose = require('mongoose')



const assignmentSchema = new mongoose.Schema({
    name: {
        type: "string",
        require: [true, "Please Enter Your Name"],
        trim: true
    },
    description: {
        type: "string",
        

    },
    rules: {
        type: "string",
      
    },
    author: {
        type: "string",
        default: "admin"
    },
    file: {
        type: "string",
        default: "https://res.cloudinary.com/vihanga/image/upload/v1649010992/avatar/149071_jersfv.png"
    }
},
{
    timestamps: true
})


module.exports = mongoose.model("Assignments",assignmentSchema)