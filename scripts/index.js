// const timeStamp = - create a func takes in a 13 digit unix timestamp as a parameter and converts it to format in mockup,
//invoke that. object.time

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

  commentImage.innerText = comments.profileImg; //need to match this with postman keys
  commentAuthor.innerText = comments.name;
  commentDate.innerText = new Date(comments.timestamp).toLocaleDateString();
  commentText.innerText = comments.comment;

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

// Renders the comments, but must be called AFTER we get the comments, otherwise, there's nothing to render
const renderComments = (commentsArray) => {
  const myCommentsContainer = document.querySelector(".comment__list");
  myCommentsContainer.innerHTML = ""; // delete anything prev put in there, refresh comment, replacing with empty string.
  for (let i = 0; i < commentsArray.length; i++) {
    let commentsCard = createCommentCard(commentsArray[i]);
    myCommentsContainer.appendChild(commentsCard);
  }
};
// get the form input value
const formInputName = document.getElementById("fullName");
const formInputComment = document.getElementById("comment-box");

const handleFormSubmit = (submitEvent) => {
  submitEvent.preventDefault();
  if (!submitEvent.target.fullName.value && !submitEvent.target.comment.value) {
    const panelError = document.querySelector(".panel__error");
    panelError.innerText = "Please provide all the required values.";
    panelError.classList.remove("panel__error--hide");
    panelError.classList.add("panel__error--show");
    // setTimeout(() => {
    //   panelError.classList.remove("panel__error--show");
    //   panelError.classList.add("panel__error--hide");
    // }, 3000);
  }
  // function to create new comment

  const newComment = (nameVal, commentVal) => {
    return {
      name: nameVal,
      comment: commentVal,
    };
  };
  // accessing the new comment event
  console.log(formInputName.value);
  console.log(formInputComment.value);
  const nameVal = formInputName.value;
  const commentVal = formInputComment.value;

  axios
    .post(`${BASE_URL}/comments?${API_KEY}`, newComment(nameVal, commentVal))
    .then((success) => {
      // Upon successful POST requst, the response only contains ONE comment - not all of them
      const commentsArrayFromAPI = success.data;

      getComments();

      // When you tired to render the comemnts, you were giving it just one comment object - not an array of all the objects
      // renderComments(commentsArrayFromAPI); //need to keep func in .then, where getting axios info from
      console.log(success.data);
    })
    .catch((error) => {
      console.log(error);
    });

  // comments.push(newComment);
  getComments();
  submitEvent.target.reset();
};

// renderComments(comments);
const commentForm = document.querySelector(".form__box");
commentForm.addEventListener("submit", handleFormSubmit);

//make resuable url variables
const BASE_URL = "https://project-1-api.herokuapp.com";
const commentsUrl = "https://project-1-api.herokuapp.com/comments/";
const showDatesUrl = "https://project-1-api.herokuapp.com/showdates/";
const API_KEY = "api_key=f33b34df-6637-4d08-bc73-5c370dbe478d";

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

const getComments = () => {
  axios
    .get(`${BASE_URL}/comments?${API_KEY}`)
    .then((successOutput) => {
      const commentsArrayFromAPI = successOutput.data;

      commentsArrayFromAPI.sort((a, b) => b.timestamp - a.timestamp);

      renderComments(commentsArrayFromAPI);
    })
    .catch((err) => {
      console.log(err);
    });
};

getComments();

//posting new comments

// const newComments = {
//   name: submitEvent.target.fullName.value,
//   comment: submitEvent.target.comment.value,
// };
