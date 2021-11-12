
# Portfolio Sample

To view this project, click [here](https://zacandcoder.github.io/portfolio-sample/).

## Description

I used Bootstrap, along with a bit of CSS and JavaScript, to put together a social media website that serves as a personal portfolio. 

When the site first loads, users will see a login page. The email input only checks for the basic structure of an email address, and the password input only checks for at least one character, so users can enter fake emails and passwords. Alternatively, one can click "Continue as a guest." This displays the navigation bar and the home page.

At the top of the home page is a large icon intended to represent the user's profile picture. Below this icon, there is a username, which is initially "Guest." Three buttons allow users to switch between the home page's sections. On a medium-to-large screen, these buttons stay stuck to the top of the page as users scroll down. 

By default, the home page's **Trending** section is shown. This section contains a few short posts I have created to illustrate my interests. The posts that are titled **Portfolio Projects** link to other projects of mine. There are two clickable icons to the left of each post's date. The heart icon lets users like a post, and the chat icon lets users leave a comment. Any posts that are liked will show up in the **Liked** section. Comments are limited to 100 characters. The **Create Post** section simply allows users to write a slightly longer post, as the max length is instead 300 characters.

Users can select **Notifications** in the navigation bar to view the second page. This has three mock spam messages and one unread message from me. My message may be redundant if this README has already been viewed. 

Lastly, users can click **Settings** to switch to **Dark Mode** or change their username. **Dark Mode** changes the color scheme so that the site is easier on the eyes. The username input accepts any letters and numbers. No spaces or special characters can be used. Once a username is updated, it will apply everywhere. For instance, any comments written will now show the updated username.

Please note that any text entered by users will disappear when the page reloads. This site is essentially a demonstration and therefore does not save anything. I plan to continually improve and update this portfolio as time allows, so nothing is set in stone! 

## Pictures

A few pages are exhibited below. Click on an image to enhance its quality. 

![Screenshot (27)](https://user-images.githubusercontent.com/91081344/141524260-c847845a-1702-4e89-b649-821cad22a875.png)

![Screenshot (28)](https://user-images.githubusercontent.com/91081344/141524280-547e8e26-5a2a-44eb-8f0f-053a3facc1ef.png)

![Screenshot (29)](https://user-images.githubusercontent.com/91081344/141524292-6dbd0a0e-cd0e-4047-8889-560ff8784653.png)

## Example Code

```
var likedPosts = [];

//Color "like" icons red when clicked. Clone the parent card element and add it to the Liked Posts section.
document.querySelectorAll(".bi-suit-heart").forEach(item => {
  item.addEventListener("click", function() {
    if (likedPosts.includes(item.parentNode.parentNode.parentNode)) {
      return;
    } else {
      document.querySelector("#no-likes").style.display = "none";
      item.style.color = "red";
      let post = item.parentNode.parentNode.parentNode;
      likedPosts.push(post);
      let clonedPost = post.cloneNode(true); 
      for (let i = 0; i < clonedPost.childNodes.length; i++) {
        if (clonedPost.childNodes[i].className == "card-footer") {
          clonedPost.removeChild(clonedPost.childNodes[i]);
        }
      }
      document.querySelector("#liked-posts").appendChild(clonedPost);
    } 
  });
});
```

This function simply adds posts to the **Liked** section when appropriate. The **forEach** loop adds an event listener to each heart icon, so clicking an icon will execute the function. An "if statement" determines if the post has *already* been added to the **Liked** section. If it *has*, the function simply returns. If it has not, the icon is colored red. Then, the **post** variable is made equal to the newly liked post and is added to the **likedPosts** array. The post is cloned, and a loop looks at each element of the cloned post; any **card-footer** elements are removed so that the **Liked** section contains only a shortened version of the post. Finally, the cloned post is appended to this section. 
