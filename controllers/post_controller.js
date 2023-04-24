// const Post=require('../models/posts');

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
const Post =require('../models/posts');


module.exports.create = async function(req, res){
try{  const post= await Post.create({
    content: req.body.content,  //fetching value of the "content" field submitted in request body
        user: req.user._id  //?
});

    return res.redirect('back');
}
catch(err)
{
    console.log('Error in creating Post'); 
    return;
} 
}






   