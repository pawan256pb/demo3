// Get all the toggle buttons and their corresponding hidden content divs
const toggleButtons = document.querySelectorAll(".toggle-button");
const moreInfoDivs = document.querySelectorAll(".more-info");

// Add event listeners to each toggle button
toggleButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Toggle the display of the corresponding more-info div when the button is clicked
    if (moreInfoDivs[index].style.display === "none") {
      moreInfoDivs[index].style.display = "block";
      button.textContent = "Hide Info";
    } else {
      moreInfoDivs[index].style.display = "none";
      button.textContent = "Toggle Info";
    }
  });
});
