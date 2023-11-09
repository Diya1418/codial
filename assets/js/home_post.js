

{
// method to submit the form data for new post using ajax
    let createPost = function(){
        let newPostForm = $('#new-post-form');

        newPostForm.submit(function(e){
            e.preventDefault();

            $.ajax({
                type: 'post',
                url: '/posts/create',
                data: newPostForm.serialize(),  //convert form data to json
                success: function(data){
                   
                      let newPost = newPostDom(data.data.post);
                      $(`#posts-list-container`).prepend(newPost);
                      deletePost($(' .delete-post-button', newPost));

                }, error: function(error){
                    console.log(error,responseText);
                }
            }); 
        });
    }

// method to create a post in dom

let newPostDom = function(post){
    return $(`<li id="post-${post._id}">

    <p>

        
         <small>
              <a class="delete-post-button" href="/posts/destroy/${post._id}">X</a>
         </small>

         <% } %>
         ${post.content}

<br>
  <small>
  ${post.user.name}

  </small>  

   </p>

  <div class="post-comments">
      
         <form action="/comments/create" id="post-${post._id}" method="POST">

              <input type="text" name="content" placeholder="Type here to add comment" required>
              <input type="hidden" name="post" value="${post._id}">
              <input type="submit" value="Add Comment" style="background-color: cadetblue; border-radius: 5px;">
         </form>  
      

         <div class="post-comments-list">
              <ul id="post-comments-${post._id}">
                   
              </ul>
         </div>
  </div>

</li>`)
}

// method to delete a post from dom

  let deletePost = function(deleteLink){
    $(deleteLink).click(function(e){
        e.preventDefault();

        $.ajax({
            type: 'get',
            url: $(deleteLink).prop('href'),
            success: function(data){
                $(`#post-${data.data.post-_id}`).remove();
            },error: function(error){
                console.log(error.responseText);
            }
        })
    })
  }


    createPost();
}

