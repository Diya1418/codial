const Comment = require('../models/comment');
const Post = require('../models/posts');

module.exports.create = async function(req, res){

   //  try{
   //     const post = await Post.findById(req.body.post);
   //     if(post){
   //       Comment.create({
   //          content: req.body.content,
   //          post: req.body.post,
   //          user: req.user._id
   //       })
   //       post.comments.push(comment);
   //       post.save();  // to save in database

   //       res.redirect('/');
         
   //     }
   //  }
   //  catch(err){
   //       console.log(err);
   //  }
   try {
      const post = await Post.findById(req.body.post);
      if (post) {
        //console.log(req.user._id)
        const comment = await Comment.create({
          content: req.body.content,
          post: req.body.post,
          user: req.user._id

        });
        post.comments.push(comment);
        post.save();
        res.redirect('/');
      }
    } catch (err) {
      console.log(err);
      // handle error
    }


};