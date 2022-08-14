// Grabing the Input
const filterInput = document.getElementById("filterInput");

// Add event listener
filterInput.addEventListener("keyup", filterNames);

// Calling the function
function filterNames() {
  // get the value
  const filterValue = document
    .getElementById("filterInput")
    .value.toUpperCase();
  // get the ul
  const ul = document.getElementById("names");
  //   get the lis
  const li = ul.querySelectorAll("li.collection-item");
  //   loop through the elements
  for (let i = 0; i < li.length; i++) {
    const a = li[i].getElementsByTagName("a")[0];
    // if matched
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
