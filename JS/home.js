document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript Loaded");

  // Function to toggle Settings Page visibility
  window.settin_thing = function (id) {
    let element = document.querySelector(`.${id}`);
    element.style.display =
      element.style.display === "none" || element.style.display === ""
        ? "block"
        : "none";
  };

  // Function to close Settings Page
  window.cross = function (id) {
    let element = document.querySelector(`.${id}`);
    element.style.display = "none";
  };

  // Function to switch between different settings pages
  window.page_selevtor = function (show, hide1, hide2) {
    document.querySelector(`.${show}`).style.display = "block";
    document.querySelector(`.${hide1}`).style.display = "none";
    document.querySelector(`.${hide2}`).style.display = "none";
  };

  // Theme switching
  document.querySelector(".light").addEventListener("click", function () {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
  });

  document.querySelector(".dark").addEventListener("click", function () {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
  });



  // Search Functionality (Basic)
  document.querySelector(".-search").addEventListener("input", function (e) {
    let searchTerm = e.target.value.toLowerCase();
    document.querySelectorAll(".ani-con").forEach((item) => {
      let title = item.querySelector(".homie-p").textContent.toLowerCase();
      item.style.display = title.includes(searchTerm) ? "block" : "none";
    });
  });

  console.log("Script Execution Completed");
});
