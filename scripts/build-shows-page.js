console.log("hello");

const shows = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },

  {
    date: "Tue Sept 21 2021 ",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },

  {
    date: "Fri Oct 15 2021 ",
    venue: "View Lounge ",
    location: "San Francisco, CA",
  },

  {
    date: "Sat Nov 06 2021 ",
    venue: "Hyatt Agency ",
    location: "San Francisco, CA",
  },

  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },

  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center ",
    location: "San Francisco, CA",
  },

  {
    date: "Wed Dec 15 2021 ",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];
console.log(shows);

const createShowCard = (shows) => {
  const showCard = document.createElement("article");
  showCard.classList.add("shows");

  // Add a wrapper for the show dates (desktop and mobile) to fix the alignment
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

  // Add a class to the show date wrapper
  showDateWrapper.classList.add("shows__wrapper");
  showDateTitle.classList.add("shows__subtitle");
  showVenueWrapper.classList.add("shows__wrapper"); // Add a class to the venue wrapper aswell
  showVenueTitle.classList.add("shows__subtitle");
  showLocationTitle.classList.add("shows__subtitle");
  showDate.classList.add("shows__content--date");
  showVenue.classList.add("shows__content--venue");
  showLocation.classList.add("shows__content--location");
  showButton.classList.add("shows__content--button");
  showDivider.classList.add("shows__divider");

  showDate.innerText = shows.date;
  showVenue.innerText = shows.venue;
  showLocation.innerText = shows.location;
  showButton.innerText = "BUY TICKETS";
  showDateTitle.innerText = "DATE";
  showLocationTitle.innerText = "VENUE";
  showVenueTitle.innerText = "LOCATION";

  // Add the show date title to the showDateWrapper
  showDateWrapper.appendChild(showDateTitle);
  showDateWrapper.appendChild(showDate);

  // Add the show date title to the showDateWrapper
  showVenueWrapper.appendChild(showVenue);
  showVenueWrapper.appendChild(showVenueTitle);

  showCard.appendChild(showDateWrapper);
  // showCard.appendChild(showDateTitle);
  // showCard.appendChild(showDate);
  showCard.appendChild(showLocationTitle);
  // showCard.appendChild(showVenue);
  // showCard.appendChild(showVenueTitle);
  showCard.appendChild(showVenueWrapper);
  showCard.appendChild(showLocation);
  showCard.appendChild(showButton);
  showCard.appendChild(showDivider);

  return showCard;
};
// this will be storing comments

//this function will loop through all the comments
//stores comments somewhere?

const renderShows = (showsArray) => {
  const myShowContainer = document.querySelector(".shows__content");
  myShowContainer.innerHTML = "";
  for (let i = 0; i < showsArray.length; i++) {
    let showCard = createShowCard(shows[i]);
    myShowContainer.appendChild(showCard);
  }
};
renderShows(shows);
