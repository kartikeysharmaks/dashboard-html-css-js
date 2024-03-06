document.querySelector(".jsFilter").addEventListener("click", function () {
  document.querySelector(".filter-menu").classList.toggle("active");
});

document.querySelector(".grid").addEventListener("click", function () {
  document.querySelector(".list").classList.remove("active");
  document.querySelector(".grid").classList.add("active");
  document.querySelector(".products-area-wrapper").classList.add("gridView");
  document
    .querySelector(".products-area-wrapper")
    .classList.remove("tableView");
});

document.querySelector(".list").addEventListener("click", function () {
  document.querySelector(".list").classList.add("active");
  document.querySelector(".grid").classList.remove("active");
  document.querySelector(".products-area-wrapper").classList.remove("gridView");
  document.querySelector(".products-area-wrapper").classList.add("tableView");
});

var modeSwitch = document.querySelector(".mode-switch");
modeSwitch.addEventListener("click", function () {
  document.documentElement.classList.toggle("light");
  modeSwitch.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  var dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener("click", function () {
      this.classList.toggle("active");
      var dropdownContent = this.querySelector(".dropdown-content");
      dropdownContent.classList.toggle("show");
    });
  });
});

document.getElementById("searchInput").addEventListener("keyup", function () {
  var input = this.value.toLowerCase();
  var products = document.querySelectorAll(".products-row");

  products.forEach(function (product) {
    var productName = product
      .querySelector(".product-cell.image span")
      .textContent.toLowerCase();

    if (productName.includes(input)) {
      product.style.display = "flex";
    } else {
      product.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var applyButton = document.querySelector(".apply");
  var resetButton = document.querySelector(".reset");

  applyButton.addEventListener("click", function () {
    filterProducts();
  });

  resetButton.addEventListener("click", function () {
    document.getElementById("categoryFilter").selectedIndex = 0;
    document.getElementById("statusFilter").selectedIndex = 0;
    filterProducts();
  });
});

function filterProducts() {
  var categoryFilter = document
    .getElementById("categoryFilter")
    .value.toLowerCase()
    .trim();
  console.log(categoryFilter);
  var statusFilter = document
    .getElementById("statusFilter")
    .value.toLowerCase()
    .trim();
  console.log(statusFilter);
  var products = document.querySelectorAll(".products-row");

  products.forEach(function (product) {
    var category = product
      .querySelector(".product-cell.category")
      .textContent.split(":")[1]
      .toLowerCase()
      .trim();
    // console.log(category)
    // console.log(category === categoryFilter)
    var status = product
      .querySelector(".status")
      .textContent.toLowerCase()
      .trim();
    console.log(status);
    console.log(status === statusFilter);

    if (
      (categoryFilter === "all categories" || category === categoryFilter) &&
      (statusFilter === "all status" || status === statusFilter)
    ) {
      product.style.display = "flex";
    } else {
      product.style.display = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const itemsWithChildren = document.querySelectorAll(
    ".sidebar-list-item.has-children"
  );

  itemsWithChildren.forEach((item) => {
    item.addEventListener("click", function (event) {
      const nestedList = item.querySelector(".nested");
      if (nestedList) {
        event.preventDefault();
        item.classList.toggle("active");
      }
    });
  });
});
