const { find, findOneAndDelete } = require("./../Models/User");
const userModel = require("./../Models/User")



// to create new user  //

exports.createUser = async (req, res) => {
    try{
        const user = await new userModel(req.body).save();
         res.json(user);
        }catch(err){
            res.json({err});

        }
}


// to get useer data from database //

exports.getAllUser = async (req, res) => {
    try{
        const user = await  userModel.find();
         res.json(user);
        }catch(err){
            res.json({err});

        }
}

// to get specific user data from database //

exports.getUser = async (req, res) => {
  try{
      const user = await  userModel.find({_id:req.params.userId});
       res.json(user);
      }catch(err){
          res.json({err});

      }
}


// to delete user data from database//


exports.delUser = (req, res) => {

        userModel.findOneAndDelete({_id:req.params.userId} , (err , data) => {
              if(err){
                res.json({err});
              }else{
                res.json(data);
              }
        })
        
}


// to update user data from database//


exports.updateUser = (req, res) => {

    userModel.findOneAndUpdate({_id:req.params.userId},req.body,{new:true} , (err , data) => {
          if(err){
            res.json({err});
          }else{
            res.json(data);
          }
    })
    
}


