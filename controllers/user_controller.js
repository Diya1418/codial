const User = require('../models/user')
//render profile
// module.exports.profile= function(req,res){
//    if(req.cookies.user_id){
//        User.findById(req.cookies.user_id, function(err,req){
//          if(user){
//             return res.render('user_profile', {
//                      title: "User Profile"
//                  });
//          }

//          return res.redirect('/user/sign-up')

//        })
//    }
//    else{
//       return res.redirect('/user/sign-in')
//    }
module.exports.profile = function(req, res){
   return res.render('user_profile', {
       title: 'User Profile'
   })
}

//    return res.render('user_profile', {
//       title: "User Profile"
//   });

//render sign up page
module.exports.signUp = function(req,res){
   if(req.isAuthenticated()){
      return res.redirect('/user/profile');
   }

   return res.render('user_sign_up',{
      title: "Codial | Sign Up"
   })
  

}

//render sign in page
module.exports.signIn = function(req,res){
   if(req.isAuthenticated()){
      return res.redirect('/user/profile');
   }

   return res.render('user_sign_in',{
      title: "Codial | Sign In"
   })


}

// get the sign up data
module.exports.create = async function(req, res) {
   if (req.body.password !== req.body.confirm_password) {
     return res.redirect('back');
   }
 
   try {
     const user = await User.findOne({ email: req.body.email });
     if (user) {
       return res.redirect('back');
     }
     const newUser = await User.create(req.body);
     return res.redirect('/user/sign-in');
   } catch (error) {
     console.error('Error in creating user:', error);
     return res.status(500).json({ message: 'Server Error' });
   }
 };

 
// get the sign in data
module.exports.createSession = function(req, res){
   return res.redirect('/');

 }

 module.exports.destroySession = function(req, res){
   req.logout(function(err) {  // passport provide this function
       if (err) {
           console.log(err);
           return next(err);
       }
       
       return res.redirect('/');
   });
}