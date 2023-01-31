import mongoose from "mongoose";
 
const User = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    }
});
    //User.virtual('sum').get(function() {
   // return this.name + this.email;
  //});
 
export default mongoose.model('Users', User);