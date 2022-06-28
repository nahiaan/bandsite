const createShowCard = (shows) => {
  const showCard = document.createElement("article");
  showCard.classList.add("shows");

  const showDateWrapper = document.createElement("div");
  const showDateTitle = document.createElement("h2");
  const showDate = document.createElement("h3");

  const showVenueWrapper = document.createElement("div");
  const showVenueTitle = document.createElement("h2");
  const showVenue = document.createElement("h3");

  const showLocationTitle = document.createElement("h2");
  const showLocation = document.createElement("h3");

  const showButton = document.createElement("button");
  const showDivider = document.createElement("hr");

  showDateWrapper.classList.add("shows__wrapper");
  showDateTitle.classList.add("shows__subtitle");
  showVenueWrapper.classList.add("shows__wrapper");
  showVenueTitle.classList.add("shows__subtitle");
  showLocationTitle.classList.add("shows__subtitle");
  showDate.classList.add("shows__content--date");
  showVenue.classList.add("shows__content--venue");
  showLocation.classList.add("shows__content--location");
  showButton.classList.add("shows__content--button");
  showDivider.classList.add("shows__divider");

  showDate.innerText = shows.date;
  showVenue.innerText = shows.place;
  showLocation.innerText = shows.location;
  showButton.innerText = "BUY TICKETS";
  showDateTitle.innerText = "DATE";
  showLocationTitle.innerText = "VENUE";
  showVenueTitle.innerText = "LOCATION";

  showDateWrapper.appendChild(showDateTitle);
  showDateWrapper.appendChild(showDate);
  showVenueWrapper.appendChild(showVenue);
  showVenueWrapper.appendChild(showVenueTitle);

  showCard.appendChild(showDateWrapper);
  showCard.appendChild(showLocationTitle);
  showCard.appendChild(showVenueWrapper);
  showCard.appendChild(showLocation);
  showCard.appendChild(showButton);
  showCard.appendChild(showDivider);

  return showCard;
};

//this function will loop through all the shows

const renderShows = (showsArray) => {
  const myShowContainer = document.querySelector(".shows__content");
  myShowContainer.innerHTML = "";
  for (let i = 0; i < showsArray.length; i++) {
    let showCard = createShowCard(showsArray[i]); //was shows b4, how showsArray
    myShowContainer.appendChild(showCard);
  }
};
// renderShows(shows);

const BASE_URL = "https://project-1-api.herokuapp.com";
const commentsUrl = "https://project-1-api.herokuapp.com/comments/";
const showDatesUrl = "https://project-1-api.herokuapp.com/showdates/";
const API_KEY = "api_key=f33b34df-6637-4d08-bc73-5c370dbe478d";

const getShows = () => {
  axios
    .get(`${BASE_URL}/showdates?${API_KEY}`)
    .then((resultOutput) => {
      const showsArrayFromAPI = resultOutput.data;
      console.log(showsArrayFromAPI);
      renderShows(showsArrayFromAPI);
    })
    .catch((err) => {
      console.log(err);
    });
};

getShows();
