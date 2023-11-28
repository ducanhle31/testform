define(function () {
  // hien va an category mobile listing
  var btnCategory = document.querySelector(".listing--fixed");
  var categoryMobile = document.querySelector(".listing__category--mobile");
  var btnDown = document.getElementById("down");
  var coverListing = document.querySelector(".listing__cover");
  var cancel = document.getElementById("cancel");
  if (btnCategory) {
    btnCategory.onclick = function () {
      coverListing.classList.add("show"); //hien lop cover khi click vao menu fixed
      categoryMobile.classList.add("show-category"); //dong thoi hien category
    };
  }

  if (coverListing) {
    //kiem tra neu co lop cover thi an di va dong thoi an category
    coverListing.onclick = function () {
      coverListing.classList.remove("show");
      categoryMobile.classList.remove("show-category");
    };
  }

  if (btnDown) {
    btnDown.onclick = function () {
      categoryMobile.classList.remove("show-category");
      coverListing.classList.remove("show");
    };
  }

  if (cancel) {
    cancel.onclick = function () {
      categoryMobile.classList.remove("show-category");
      coverListing.classList.remove("show");
    };
  }
});
