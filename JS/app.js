// ===============================================================================================

// {{{{GRID FUNCTION}}}}
// ==================================================================================================================================
// Random suggestion. [index.page]
// ==================================================================================================================================

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

//function to display content.
function displayrandom() {
  const totalitem = 30; //Total number of items
  const itemdisplay = 9; //Total number of items to display
  const tempitems = new Set(); //set that will contain only uniq item num.

  //for randomly selecting 9 items.
  while (tempitems.size < itemdisplay) {
    const randomnum = getRandomInt(totalitem);
    tempitems.add(randomnum);
  }

  // Loop through all the grid items and hide or show based on selected random item
  const grid_items = document.querySelectorAll(".ani-item");
  grid_items.forEach((item, index) => {
    if (tempitems.has(index + 1)) {
      item.classList.add("show"); //shows the element
    } else {
      item.classList.remove("show"); // Hide the item
    }
  });
}

//when page reload the random grid function will be called
window.onload = displayrandom;

// ===================================================================================================
// ==================================================================================================================================
// setting pages [common]
// ==================================================================================================================================

function page_selevtor(p1, p2, p3) {
  const page1 = document.querySelector(`.${p1}`);
  const page2 = document.querySelector(`.${p2}`);
  const page3 = document.querySelector(`.${p3}`);

  page1.style.display = "block";
  page2.style.display = "none";
  page3.style.display = "none";
}
function settin_thing(className) {
  // Get the settings page element
  const settingsPage = document.querySelector(".setting-page");

  // Toggle its visibility
  if (settingsPage.style.display === "none") {
    settingsPage.style.display = "block";
  } else {
    settingsPage.style.display = "none";
  }
}

// ==================================================================================================================================
// light and dark mode [common]
// ==================================================================================================================================

// Call this function when the "Light" or "Dark" button is clicked
document.querySelector(".light").addEventListener("click", () => {
  document.body.classList.add("light-mode");
});

document.querySelector(".dark").addEventListener("click", () => {
  document.body.classList.remove("light-mode");
});

function cross(button) {
  const btn = document.querySelector(`.${button}`);

  btn.style.display = "none";
}

function cross(button) {
  const btn = document.querySelector(`.${button}`);

  btn.style.display = "none";
}

// ==================================================================================================================================
// anime review page slide bar [anime-pages.html]
// ==================================================================================================================================

let page = 1;

function showNext(...pages) {
  const elements = pages
    .map((p) => document.querySelector(`.${p}`))
    .filter((el) => el);

  elements.forEach((el) => (el.style.display = "none"));

  page++;
  if (page > elements.length) {
    page = 1;
  }

  elements[page - 1].style.display = "block";
}

function showPrevious(...pages) {
  const elements = pages
    .map((p) => document.querySelector(`.${p}`))
    .filter((el) => el);

  if (elements.length === 0) {
    console.error("No valid elements found!");
    return;
  }

  elements.forEach((el) => (el.style.display = "none"));

  page--;
  if (page < 1) {
    page = elements.length;
  }

  elements[page - 1].style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
  showNext("ap1", "ap2", "ap3", "ap4", "ap5", "ap6");
});
