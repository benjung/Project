let recipes = document.getElementById("recipe-img");

recipes.addEventListener(
  "mouseover",
  function (event) {
    event.target.style.width = "350px";
    event.target.style.height = "350px";
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

let heading = document.getElementById("heading1");

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
