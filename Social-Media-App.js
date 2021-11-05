document.querySelectorAll("header, #content").forEach(item => {
  item.style.display = "none";
});

document.querySelector("#guest-login").addEventListener("click", function() {
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

document.querySelector("#settings-link").addEventListener("click", function() {
  document.querySelectorAll("#content, #notifications").forEach(item => {
	item.style.display = "none";
  });
  document.querySelector("#settings").style.display = "block";
});
document.querySelector("#home-link").addEventListener("click", function() {
  document.querySelectorAll("#settings, #notifications").forEach(item => {
	item.style.display = "none";
  });
  document.querySelector("#content").style.display = "block";
});
document.querySelector("#notifications-link").addEventListener("click", function() {
  document.querySelectorAll("#settings, #content").forEach(item => {
	item.style.display = "none";
  });
  document.querySelector("#notifications").style.display = "block";
});

document.querySelector("#dark-mode-switch").addEventListener("click", function() {
  document.querySelectorAll("html, body, nav").forEach(item => {
    item.classList.toggle("dark");
  });
  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.toggle("btn-dark");
  });
  document.querySelectorAll(".card").forEach(item => {
    item.classList.toggle("bg-dark");
  }); 
  document.querySelectorAll("p, .bi-house-fill, .bi-envelope-fill, .bi-gear-fill").forEach(item => {
    item.classList.toggle("dark-navlink");
  });
  document.querySelectorAll("textarea").forEach(item => {
    item.classList.toggle("dark-comment");
  });
  document.querySelectorAll(".accordion-button, .accordion-body, .form-control").forEach(item => {
    item.classList.toggle("bg-dark");
    item.classList.toggle("text-white");
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
    var profileIcon = document.createElement("i");
    profileIcon.className = "bi";
    profileIcon.classList.add("bi-person-bounding-box");
    item.parentNode.appendChild(profileIcon);
    var username = document.createElement("p");
    username.innerHTML = "@Guest";
    username.className = "d-inline";
    item.parentNode.appendChild(username);
    item.style.display = "none";
  });
});
