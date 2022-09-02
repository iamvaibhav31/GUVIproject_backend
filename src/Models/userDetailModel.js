const mongoose = require('mongoose');
const { Schema } = mongoose;



const userDetailsSchema = new Schema({
     first_name: {
          type: String,
     },
     last_name: {
          type: String,
     },
     userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "users",
          required: true
     },
     email: {
          type: String,
          required: true,
          unique: true,
     },
     Gender: {
          type: String,
          enum: ["Male", "Female", "Other"],
     },
     age: {
          type: Number,
     },
     mobileNo: {
          type: String,
          validate: {
               validator: function (str) {
                    return str.length === 10;
               },
               message: 'Phone No is must be at least 10 digit'
          },

     },
     DOB: {
          type: Date,
     }
})

userDetailsSchema.set('toJSON', {
     transform: (document, returnObject) => {
          returnObject.id = returnObject._id.toString();
          delete returnObject._id;
          delete returnObject.__v;
     }
})

const usersDetails = mongoose.model('usersDetails', userDetailsSchema)


module.exports = usersDetails