// ===============================================================================================

// {{{{GRID FUNCTION}}}}

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
