//This is the suggested method to initialize tooltips on https://getbootstrap.com/docs/5.0/components/tooltips/ 
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
})

document.querySelector("#settings-link").addEventListener("click", function() {
  document.querySelector("#content").style.display = "none";
  document.querySelector("#settings").style.display = "block";
});
document.querySelector("#home-link").addEventListener("click", function() {
  document.querySelector("#settings").style.display = "none";
  document.querySelector("#content").style.display = "block";
});

var likedPosts = [];

//Color "like" icons red when clicked. Clone the parent card element and add it to the Liked Posts section.
document.querySelectorAll(".bi-suit-heart").forEach(item => {
  //Figure out how to stop post from being liked multiple times
  item.addEventListener("click", function() {
    if (likedPosts.includes(item.parentNode.parentNode)) {
      return;
    } else {
      item.style.color = "red";
      let post = item.parentNode.parentNode.parentNode;
      likedPosts.push(post);
      let clonedPost = post.cloneNode(true); 
      document.querySelector("#liked-posts").appendChild(clonedPost);
    }
  });
});

//Switch nav tabs when clicked
document.querySelector("#trending-button").addEventListener("click", function() {
  document.querySelector("#liked-posts").style.display = "none";
  document.querySelector("#create-post").style.display = "none";
  document.querySelector("#trending").style.display = "block";
});
document.querySelector("#like-button").addEventListener("click", function() {
  document.querySelector("#trending").style.display = "none";
  document.querySelector("#create-post").style.display = "none";
  document.querySelector("#liked-posts").style.display = "block";
});
document.querySelector("#create-post-button").addEventListener("click", function() {
  document.querySelector("#trending").style.display = "none";
  document.querySelector("#liked-posts").style.display = "none";
  document.querySelector("#create-post").style.display = "block";
});

//Color "comment" icons red when clicked. Create new textarea element when comment icon is clicked.
document.querySelectorAll(".bi-chat-left").forEach(item => {
  item.addEventListener("click", function() {
    item.style.color = "red";
    if (item == document.querySelector("#usf-comment")) {
      document.querySelector("#usf-comment-box").style.display = "block";
      /*var commentBox = document.createElement("div");
      var comment = document.createElement("textarea");
      var submitComment = document.createElement("button");
      submitComment.className = "btn-sm btn-primary";
      submitComment.innerText = "Submit";
      commentBox.appendChild(comment);
      commentBox.appendChild(submitComment);
      item.parentNode.parentNode.appendChild(commentBox); */
    } else if (item == document.querySelector("#aurelius-comment")) {
      document.querySelector("#aurelius-comment-box").style.display = "block";
    } else if (item == document.querySelector("#blackjack-comment")) {
      document.querySelector("#blackjack-comment-box").style.display = "block";
    } else if (item == document.querySelector("#hbo-comment")) {
      document.querySelector("#hbo-comment-box").style.display = "block";
    } else if (item == document.querySelector("#halo-comment")) {
      document.querySelector("#halo-comment-box").style.display = "block";
    } else if (item == document.querySelector("#checkers-comment")) {
      document.querySelector("#checkers-comment-box").style.display = "block";
    } else if (item == document.querySelector("#ufc-comment")) {
      document.querySelector("#ufc-comment-box").style.display = "block";
    } else if (item == document.querySelector("#seneca-comment")) {
      document.querySelector("#seneca-comment-box").style.display = "block";
    } else if (item == document.querySelector("#uf-comment")) {
      document.querySelector("#uf-comment-box").style.display = "block";
    }
  });
});

document.querySelectorAll(".btn-sm").forEach(item => {
  item.addEventListener("click", function() {
    //Maybe prevent submission if nothing has been typed in comment box
    item.parentNode.childNodes[1].disabled = true;
    /*var username = document.createElement("p");
    username.innerText = "Guest";
    item.parentNode.appendChild(username); */
    item.style.display = "none";
  });
});


