 const Post = require('../models/posts');
const Comment = require('../models/comment');
// module.exports.create = function(req,res){
// Post.create({
//         content : req.body.content,
//         user: req.user._id
//     }, function(err,post){
//         if(err){
//             console.log('error in creating a post');
//             return;
//         }

//        return res.redirect('back');
//     })

// }
// const Post =require('../models/posts');


module.exports.create = async function(req, res){
try{ 
   let post= await Post.create({
    content: req.body.content,  //fetching value of the "content" field submitted in request body
        user: req.user._id  //?
});

if(req.xhr){
  console.log(req);
  // post = await post.populate('user');
  return res.status(200).json({
    data: {
      post: post,
    },
    message:"Post created!",
   
  })
}


    req.flash('success', 'Post published');
    return res.redirect('back');
}
catch(err)
{
    req.flash('error', err);
    console.log('Error in creating Post'); 
    return;
} 
}

//  module.exports.destroy = function(req,res){
//     Post.findById(req.params.id, function(err, post){
//   // .id means converting the object id into string
//         if(post.user == req.user.id){
//             post.remove();

//             Comment.deleteMany({post: req.params.id}, function(err){
//                 return res.redirect('back');
//             });

//         }else {
//             return res.redirect('back');
//         }
//     });

//  }

 module.exports.destroy = async function(req, res) {
    try {
      let post = await Post.findById(req.params.id);
      if (post.user == req.user.id) {
        // await post.remove(); // now this doesn't work
        await Post.deleteOne({ _id: post._id }).exec();
        await Comment.deleteMany({ post: req.params.id });

        if(req.xhr){
          return res.status(200).json({
            data: {
              post_id: req.params.id
            },
            message: "Post deleted!!"
          })
        }

        req.flash('success', 'Post and associated comments deleted');
        
        return res.redirect('back');
      } else {
        req.flash('error ', 'You cannot delete this Post');

        return res.redirect('back');
      }
    } catch (err) {
      // Handle error
      req.flash('error ', err);

      // console.error(err);
      return res.status(500).send('Internal Server Error');
    }
  };
  




   
// module.exports.create = async function(req, res) {
//   try {
//     const post = await Post.create({
//       content: req.body.content,
//       user: req.user._id,
//     });

//     if (req.xhr) {
//       return res.status(200).json({
//         data: {
//           post: post,
//         },
//         message: "Post created!",
//       });
//     }

//     req.flash('success', 'Post published');
//     return res.redirect('back');
//   } catch (err) {
//     req.flash('error', err.message); // Flash an error message
//     console.error('Error in creating Post', err);
//     return res.redirect('back'); // Redirect in case of an error
//   }
// };

// module.exports.destroy = async function(req, res) {
//   try {
//     const post = await Post.findById(req.params.id);
//     if (post.user == req.user.id) {
//       await Post.deleteOne({ _id: post._id }).exec();
//       await Comment.deleteMany({ post: req.params.id });

//       if (req.xhr) {
//         return res.status(200).json({
//           data: {
//             post_id: req.params.id,
//           },
//           message: "Post deleted!!",
//         });
//       }

//       req.flash('success', 'Post and associated comments deleted');
//       return res.redirect('back');
//     } else {
//       req.flash('error', 'You cannot delete this Post');
//       return res.redirect('back');
//     }
//   } catch (err) {
//     // Handle error
//     req.flash('error', err.message); // Flash an error message
//     console.error(err);
//     return res.status(500).send('Internal Server Error');
//   }
// };
