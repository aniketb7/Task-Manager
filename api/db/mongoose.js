// THis file will handle the connection logic to mongoDB

const mongoose = require('mongoose')

mongoose.Promise= global.Promise; 
mongoose.connect('mongodb://localhost:27017/TaskManager',{useNewUrlParser:true}).then(()=>{
    console.log("Connected to MongoDB Successfully");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});
// mongoose.set('useCreateIndex',true);
// mongoose.set('useUnifiedTopology', true);
// mongoose.set('useFindAndModify',false);

module.exports={
    mongoose
}
