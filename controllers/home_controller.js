const Post = require('../models/posts');

module.exports.home = async function(req,res){
 //  console.log(req.cookies);
   //res.cookie('user_id', 25);

  //  try {
  //   const posts = await Post.find({});
  //   res.render('home', {
  //     title: "Codial | Home",
  //     posts: posts
  //   });
  // } catch (err) {
  //   // Handle error
  // }


  //populate user of each post
  try {
    const posts = await Post.find({})
    .populate('user').exec();
    res.render('home', {
      title: "Codial | Home",
      posts: posts
    });
  } catch (err) {
    console.log(err);
    // Handle error
  }

}

//module.exports.actionName = function(req,res){}