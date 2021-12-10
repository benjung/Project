var recipe1 = document.getElementById("recipe1");
console.log(recipe1);

recipe1.addEventListener(
  "mouseenter",
  function (event) {
    event.target.innerHTML = "Recipe #1: Kimchi Fried Rice with Pork Belly";
  },
  false
);

var recipe2 = document.getElementById("recipe2");

recipe2.addEventListener(
  "mouseenter",
  function (event) {
    event.target.innerHTML = "Recipe #2: Kimchi Soup with Pork Belly";
  },
  false
);
 
var recipe3 = document.getElementById("recipe3");

recipe3.addEventListener(
  "mouseenter",
  function (event) {
    event.target.innerHTML = "Recipe #3: Stir-fried Baby Octopus";
  },
  false
);
