const User = require('../models/user')
//render profile
module.exports.profile= function(req,res){
   return res.render('user_profile', {
      title: "User Profile"
  });
}

//render sign up page
module.exports.signUp = function(req,res){
   return res.render('user_sign_up',{
      title: "Codial | Sign Up"
   })
  
   User

}

//render sign in page
module.exports.signIn = function(req,res){
   return res.render('user_sign_in',{
      title: "Codial | Sign In"
   })


}

// get the sign up data
module.exports.create = function(req, res){
   
   if(req.body.password != req.body.confirm_password){
      return res.redirect('back');
   }

   // User.findOne({email:req.body.email},function(err,res){
   //      if(err){console.log('error in finding user in signing up');return}
        
   //      if(!user){
   //       User.create(req.body, function(err, user){
   //          if(err){console.log('error in creating user in signing up');return}

   //          return res.redirect('/user/sign-in');
   //       })
   //      }
   //      else{
   //       return res.redirect('back');
   //      }
   // });

   

User.findOne({ email: req.body.email }).exec()
.then(function(user) {
  if (user) {
    // User already exists

    return res.redirect('back');
  } else {
    // Create a new user
    User.create(req.body, function(err, user){
          if(err){console.log('error in creating user in signing up');return}

          return res.redirect('/user/sign-in');
       })
  }
})
.catch(function(err) {
  // Handle the error
  console.log('error in finding user in signing up');return;

});


}


// User.findOne({ email: req.body.email }).exec()
//   .then(function(user) {
//     if (user) {
//       // User already exists

//       return res.redirect('back');
//     } else {
//       // Create a new user
//       User.create(req.body, function(err, user){
//             if(err){console.log('error in creating user in signing up');return}

//             return res.redirect('/user/sign-in');
//          })
//     }
//   })
//   .catch(function(err) {
//     // Handle the error
//     console.log('error in finding user in signing up');return;

//   });


// get the sign in data
module.exports.createSession = function(req, res){
   //todo
   }