const likeBtnContainer = document.querySelector(".like-container"),
  fillHeart = document.querySelector(".fill-heart"),
  bookmarkContainer = document.querySelector(".bookmark"),
  fillBookmark = document.querySelector(".fill-bookmark"),
  moreDescription = document.querySelectorAll(".para-desc p"),
  moreBtn = document.querySelectorAll(".more"),
  followBtn = document.querySelectorAll(".profile-follow button");

moreBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.style.display = "none";
    for (let i = 0; i < moreDescription.length; i++) {
      moreDescription[i].style.textOveflow = "clip";
      moreDescription[i].style.whiteSpace = "normal";
    }
  });
});

followBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent !== "following") {
      btn.textContent = "following";
    } else {
      btn.textContent = "follow";
    }
  });
});
