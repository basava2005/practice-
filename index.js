const mongoose= require("mongoose");

main()
    .then(()=>{
        console.log("connection successful");
    })
    .catch((err)=>console.log(err))

async function main() {
    

    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    age:Number

})
const User=mongoose.model("User",userSchema);
user1=new User({name:"adam",email:"adam222@123",ade:48});
user1.save();
user.insertmany([
    {name:"adam",email:"adam222@123",ade:48},
    {name:"adam",email:"adam222@123",ade:48},
    {name:"adam",email:"adam222@123",ade:48},
])