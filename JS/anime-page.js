// Function to get URL parameter
function getAnimeFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("anime"); // Return 'anime' parameter from the URL
}

document.addEventListener("DOMContentLoaded", () => {
  // Get the anime ID from the URL
  const animeId = getAnimeFromURL();

  // Fetch the anime data from the JSON file
  fetch("../Data/data.json")
    .then((response) => response.json())
    .then((data) => {
      const anime = data.find((anime) => anime.id === animeId);

      if (anime) {
        // Populate the page with the anime details
        document.querySelector(".title h1").textContent = anime.title;
        document.querySelector(".indexofAchild p").textContent =
          anime.description;
        document.querySelector(".ratingchild h2").textContent = anime.rating;

        // Populate the images
        const imageContainer = document.querySelector(".imgsrev");
        imageContainer.innerHTML = ""; // Clear existing images
        anime.images.forEach((imgSrc) => {
          const imgElement = document.createElement("img");
          imgElement.src = imgSrc;
          imgElement.classList.add("img-rev");
          imageContainer.appendChild(imgElement);
        });
      } else {
        console.error("Anime not found.");
      }
    })
    .catch((error) => console.error("Error fetching anime data:", error));
});


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Star rating
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const stars = document.querySelectorAll('.star-rating .star');

stars.forEach((star) => {
  star.addEventListener('click', () => {
    stars.forEach(s => s.classList.add('selected'));
    star.classList.remove('selected');
    let prev = star.previousElementSibling;
    console.log(prev)
    while (prev) {
      prev.classList.remove('selected');
      prev = prev.previousElementSibling;
    }

    const rating = star.getAttribute('data-value');
    console.log('Selected Rating:', rating); // You can save this to DB or display it
  });
});

// {{{{GRID FUNCTION}}}}
// ==================================================================================================================================
// Random suggestion
// ==================================================================================================================================

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

//function to display content.
function displayrandom() {
  const totalitem = 50; //Total number of items
  const itemdisplay = 25; //Total number of items to display
  const tempitems = new Set(); //set that will contain only uniq item num.

  //for randomly selecting 9 items.
  while (tempitems.size < itemdisplay) {
    const randomnum = getRandomInt(totalitem);
    tempitems.add(randomnum);
  }

  // Loop through all the grid items and hide or show based on selected random item
  const grid_items = document.querySelectorAll(".ani-con-ARP");
  grid_items.forEach((item, index) => {
    if (tempitems.has(index + 1)) {
      item.classList.add("show"); //shows the element
      console.log(item)
    } else {
      item.classList.remove("show"); // Hide the item
    }
  });
}

//when page reload the random grid function will be called
window.onload = displayrandom;
