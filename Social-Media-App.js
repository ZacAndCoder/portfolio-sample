//Load the page with only the login element displayed, and clear all input values upon page reload
document.querySelectorAll("header, #content").forEach(item => {
  item.style.display = "none";
});
document.querySelectorAll("textarea, input").forEach(item => {
  item.value = "";
  if (item.type == "checkbox") {
    item.checked = false;
  }
});

//Allow login if email and password are "valid"
document.querySelector("#login").addEventListener("click", function() {
  //This regex is deliberately simplified. A real verification should probably include sending an actual email.
  if (document.querySelector("#email-input").value.match(/.+@.+\..+/)) {
    if (document.querySelector("#password-input").value.length > 0) {
      username = "@Guest";
      document.querySelector("#login-page").style.display = "none";
      document.querySelectorAll("header, #content").forEach(item => {
        item.style.display = "block";
      });
    } else {
      document.querySelector("#password-input").value = "";
      document.querySelector("#password-input").placeholder = "Invalid password";
    }
  } else {
    document.querySelector("#email-input").value = "";
    document.querySelector("#email-input").placeholder = "Invalid email";
  }
});
//Log in when "Continue as a guest" button is clicked
document.querySelector("#guest-login").addEventListener("click", function() {
  username = "@Guest";
  document.querySelector("#login-page").style.display = "none";
  document.querySelectorAll("header, #content").forEach(item => {
    item.style.display = "block";
  });
});

//This is the suggested method to initialize tooltips on https://getbootstrap.com/docs/5.0/components/tooltips/ 
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
})

//Switch between pages
document.querySelectorAll("#settings-link, #home-link, #notifications-link, #trending-button, #like-button, #create-post-button").forEach(item => {
  item.addEventListener("click", function() {
    switch(item) {
      case document.querySelector("#settings-link"):
        document.querySelector("#content").style.display = "none";
        document.querySelector("#notifications").style.display = "none";
        document.querySelector("#settings").style.display = "block";
        break;
      case document.querySelector("#home-link"):
        document.querySelector("#settings").style.display = "none";
        document.querySelector("#notifications").style.display = "none";
        document.querySelector("#content").style.display = "block";
        break;
      case document.querySelector("#notifications-link"):
        document.querySelector("#settings").style.display = "none";
        document.querySelector("#content").style.display = "none";
        document.querySelector("#notifications").style.display = "block";
        break;
      case document.querySelector("#trending-button"):
        document.querySelector("#liked-posts").style.display = "none";
        document.querySelector("#create-post").style.display = "none";
        document.querySelector("#trending").style.display = "block";
        break;
      case document.querySelector("#like-button"):
        document.querySelector("#trending").style.display = "none";
        document.querySelector("#create-post").style.display = "none";
        document.querySelector("#liked-posts").style.display = "block";
        break;
      case document.querySelector("#create-post-button"):
        document.querySelector("#trending").style.display = "none";
        document.querySelector("#liked-posts").style.display = "none";
        document.querySelector("#create-post").style.display = "block";
        break;
    }
  });
});

//Display name after unread message is opened
document.querySelector(".accordion-button").addEventListener("click", function() {
  document.querySelector(".accordion-button").innerText = "Zac";
});

//Change colors when Dark Mode is toggled
document.querySelector("#dark-mode-switch").addEventListener("click", function() {
  document.querySelectorAll("html, body, nav, .input-group-text").forEach(item => {
    item.classList.toggle("dark");
  });
  /*document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.toggle("btn-dark");
  }); */
  document.querySelectorAll(".card").forEach(item => {
    item.classList.toggle("bg-dark");
  }); 
  document.querySelectorAll("p, .bi-house-fill, .bi-envelope-fill, .bi-gear-fill").forEach(item => {
    item.classList.toggle("dark-navlink");
  });
  document.querySelectorAll("textarea").forEach(item => {
    item.classList.toggle("dark-comment");
  });
  document.querySelectorAll(".accordion-button, .accordion-body, .form-control, #create-post-text").forEach(item => {
    item.classList.toggle("bg-dark");
    item.classList.toggle("text-white");
  });
  allCommentUsernames.forEach(item => {
    item.classList.toggle("dark-navlink");
  });
});

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

/* Add ability to style post texts in the "Create Post" section
var isBolded = false;
var postText = document.querySelector("#create-post-text");
document.querySelector("#bold-text").addEventListener("click", function() {
  return isBolded == false ? isBolded = true : isBolded = false;
});
postText.addEventListener("input", function() {
  if (isBolded == true) {
    postText.style.fontWeight = "bold";
  } else {
    postText.style.fontWeight = "normal";
  }
}); */

//Color "comment" icons red when clicked. Display new textarea element when comment icon is clicked.
document.querySelectorAll(".bi-chat-left").forEach(item => {
  item.addEventListener("click", function() {
    item.style.color = "red";
    item.parentNode.parentNode.childNodes[3].style.display = "block";
  });
});

var username = "";

//Update username
document.querySelector("#submit-new-username").addEventListener("click", function() {
  if (document.querySelector("#change-username").value.match(/\W/i)) {
    document.querySelector("#change-username").value = "";
    document.querySelector("#change-username").placeholder = "Invalid username";
  } else if (document.querySelector("#change-username").value.match(/\w+/i)) {
    username = "@" + document.querySelector("#change-username").value;
    document.querySelector("#profile-username").innerText = username;
    for (let i = 0; i < allCommentUsernames.length; i++) {
      allCommentUsernames[i].innerText = username;
    }
  } else {
    document.querySelector("#change-username").value = "";
    document.querySelector("#change-username").placeholder = "Invalid username";
  }
});

//Save array of comments' displayed usernames so that they can be looped through and changed when username is updated
var allCommentUsernames = [];

document.querySelectorAll(".btn-sm").forEach(item => {
  item.addEventListener("click", function() {
    if (item.parentNode.childNodes[1].value.length > 0) {
      item.parentNode.childNodes[1].disabled = true;
      let profileIcon = document.createElement("i");
      profileIcon.className = "bi";
      profileIcon.classList.add("bi-person-bounding-box");
      item.parentNode.appendChild(profileIcon);
      let commentUsername = document.createElement("p");
      commentUsername.innerText = username;
      commentUsername.className = "d-inline";
      allCommentUsernames.push(commentUsername);
      item.parentNode.appendChild(commentUsername);
      item.style.display = "none";
    } else {
      item.parentNode.childNodes[1].placeholder = "You must write a comment to submit.";
    }
  });
});


