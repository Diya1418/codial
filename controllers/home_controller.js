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
    .populate('user')
    .populate({
      path: 'comments',
      populate:{
        path: 'user'
      }
    })
    .exec();
    for(let i of posts){
      console.log(i.comments);
    }
    res.render('home', {
      title: "Codial | Home",
      posts: posts,
           
    })
  } catch(err) {
    console.log(err);
    // Handle error
  }

}

//module.exports.actionName = function(req,res){}