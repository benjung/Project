let recipes = document.getElementById("recipe-img");

recipes.addEventListener(
  "mouseover",
  function (event) {
    event.target.style.width = "300px";
    event.target.style.height = "250px";
  },
  false
);

recipes.addEventListener(
  "mouseout",
  function (event) {
    event.target.style.width = "250px";
    event.target.style.height = "200px";
  },
  false
);

heading.addEventListener(
  "mouseover",
  function (event) {
    event.target.style.fontSize = "30px";
  },
  false
);
 
heading.addEventListener(
  "mouseout",
  function (event) {
    event.target.style.fontSize = "20px";
  },
  false
);
