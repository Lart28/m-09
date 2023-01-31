const elCategoryItem = document.querySelectorAll(".item");

console.log("Number of categories:", elCategoryItem.length);

elCategoryItem.forEach(function callback(element) {
  console.log("Category:", element.querySelector("h2").textContent);
  console.log("Elements:", element.querySelector("ul").children.length);
});
