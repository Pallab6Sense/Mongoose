const mongoose=require('mongoose');
const Controller=require('./Controller/User/User')
const createUser=Controller.createUser;
const findUser=Controller.findUser


main().catch(err => console.log(err)); 
async function main() {
    mongoose.connect('mongodb+srv://pallab99:pallab99@cluster0.feiscvd.mongodb.net/wds_Mongoose?retryWrites=true&w=majority')
    console.log("database connected");
}

// createUser()

findUser(); 

