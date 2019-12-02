const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log(" database connection succeded");
});
const reservationSchema = new Schema ({
  id: Number,

});

const reservationModel = mongoose.model("reservation", reservationSchema);

sample1 = new reservationModel({
  id: 4,
  
});


    
    sample1.save((error,result)=>{
      if(error){
          console.log("errrrrror",error
          )
      }
      else{
      console.log("doneeeeeeeeeeeeeeeeeee")
      }
      });
module.exports.reservationModel = reservationModel;
