const Post = require("../models/post");

const User = require('../models/user');

// module.exports.home = function(req,res){
//     //console.log(req.cookies);
//     //res.cookie('user_id' , 25);
//     return res.render('home' , {
//         title :"codial | Home",
//     });
// }

/*module.exports.home = function(req,res){
    User.find({})
    .populate('user')
    .exec(function(err , users){

        User.find({} , function(err,users){
            return res.render('home' , {
                title: "codial | Home",
                all_users: users
            });
        });
        
    })
}*/

module.exports.home = async function(req,res){
    try{
        let users = await User.find({}).populate('user');
        return res.render('home',{
            title: "codial|home",
            all_users: users
        });
    }catch(err){
        console.log('Error',err);
        return;
    }
}

//module.exports.actionName = function(){}