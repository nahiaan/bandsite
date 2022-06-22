const comments = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    commentText:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    commentText:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    commentText:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

const createCommentCard = (comments) => {
  const commentsCard = document.createElement("article");
  commentsCard.classList.add("comments");

  const commentDivider = document.createElement("hr");
  const commentImgWrapper = document.createElement("div");
  const commentInnerWrapper = document.createElement("div");
  const commentTextWrapper = document.createElement("div");
  const commentContentWrapper = document.createElement("div");

  commentDivider.classList.add("comments__divider");
  commentImgWrapper.classList.add("comments-img__wrapper");
  commentInnerWrapper.classList.add("comments-inner__wrapper");
  commentTextWrapper.classList.add("comments-text__wrapper");
  commentContentWrapper.classList.add("comments-content__wrapper");

  const commentImage = document.createElement("img");
  const commentAuthor = document.createElement("h3");
  const commentDate = document.createElement("span");
  const commentText = document.createElement("p");

  commentImage.classList.add("comments__content--image");
  commentAuthor.classList.add("comments__content--author");
  commentDate.classList.add("comments__content--date");
  commentText.classList.add("comments__content--text");

  commentImage.innerText = comments.profileImg;
  commentAuthor.innerText = comments.name;
  commentDate.innerText = comments.date;
  commentText.innerText = comments.commentText;

  commentsCard.appendChild(commentImage);
  commentsCard.appendChild(commentAuthor);
  commentsCard.appendChild(commentDate);
  commentsCard.appendChild(commentText);

  //divs
  commentImgWrapper.appendChild(commentImage);
  commentInnerWrapper.appendChild(commentAuthor);
  commentInnerWrapper.appendChild(commentDate);
  commentTextWrapper.appendChild(commentText);

  commentsCard.appendChild(commentImgWrapper);
  commentsCard.appendChild(commentInnerWrapper);
  commentsCard.appendChild(commentTextWrapper);
  commentsCard.appendChild(commentContentWrapper);

  commentContentWrapper.appendChild(commentInnerWrapper);
  commentContentWrapper.appendChild(commentTextWrapper);

  return commentsCard;
};
// this will be storing comments

//this function will loop through all the comments
//stores comments somewhere?

const renderComments = (commentsArray) => {
  const myCommentsContainer = document.querySelector(".comment__list");
  myCommentsContainer.innerHTML = "";
  for (let i = 0; i < commentsArray.length; i++) {
    let commentsCard = createCommentCard(comments[i]);
    myCommentsContainer.appendChild(commentsCard);
  }
};

const handleFormSubmit = (submitEvent) => {
  submitEvent.preventDefault();
  if (
    !(!!submitEvent.target.fullName.value && !!submitEvent.target.comment.value)
  ) {
    const panelError = document.querySelector(".panel__error");
    panelError.innerText = "Please provide all the required values.";
    panelError.classList.remove("panel__error--hide");
    panelError.classList.add("panel__error--show");
    setTimeout(() => {
      panelError.classList.remove("panel__error--show");
      panelError.classList.add("panel__error--hide");
    }, 3000);
    return;
  }

  const newComment = {
    name: submitEvent.target.fullName.value,
    date: new Date().toISOString().split("T")[0],
    commentText: submitEvent.target.comment.value,
  };

  comments.push(newComment);
  renderComments(comments);
  submitEvent.target.reset();
};

renderComments(comments);
const commentForm = document.querySelector(".form__box");
commentForm.addEventListener("submit", handleFormSubmit);

// //make resuable url variables
// const base_url = "https://project-1-api.herokuapp.com";
// const commentsUrl = "https://project-1-api.herokuapp.com/comments/";
// const showDatesUrl = "https://project-1-api.herokuapp.com/showdates/";
// const API_KEY = "api_key=f33b34df-6637-4d08-bc73-5c370dbe478d";

// axios.get(`${base_url}/comments?API_KEY`);

//get request /post request

// // Create a post
// axios
//   .post(POSTS_API, {
//     name: "Sammy",
//     email: "test@test.com",
//     phone: "07123456789",
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
