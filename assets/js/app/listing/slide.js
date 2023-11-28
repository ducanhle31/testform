var prev = document.getElementById("listing__prev");

var next = document.getElementById("listing__next");

var productItems = document.querySelectorAll(".product__item--listing-nav");
console.log(productItems);
var productApp = document.querySelector(".product__app--js");

var widthProductApp = productApp.getBoundingClientRect().width; //lay chieu rong cua khoi chua product

var iconPosts = document.querySelectorAll(".icon--pos--js"); //icon post hien theo san pham

var i = 0;
iconPosts[0].style.stroke = "#333";
next.onclick = function () {
  productApp.scrollLeft += widthProductApp; //cho khoi chua product di chuyen sang trai bang do rong cua no
  iconPosts[i + 1].style.stroke = "#333";
  for (var h = i; h >= 0; h--) {
    iconPosts[h].style.stroke = "none";
  }
  if (i < 3) {
    i++;
    console.log(i);
  }
};

var j = i;
prev.onclick = function () {
  productApp.scrollLeft -= widthProductApp; //cho khoi chua product di chuyen sang phai bang do rong cua khoi
  if (j > 0) {
    j--;
  }
  iconPosts[j].style.stroke = "#333";
  iconPosts[j + 1].style.stroke = "none";
};

// auto scroll
var maxScroll = productApp.scrollWidth - productApp.clientWidth;
// hieu so cua chieu rong khoi ca phan bi an va chieu rong khoi chi tinh phan hien thi
// neu vi tri pixel ma scroll tra ve nho hon maxscroll thi cho slide tu dong next
function autoNext() {
  if (productApp.scrollLeft >= maxScroll) {
    //neu vi tri scroll left cua productapp lon hon hoac bang max scroll
    productApp.scrollLeft = 0; //cho khoi chua product di chuyen sang trai bang do rong cua no
  } else {
    //nguoc lai thi cho tu dong next
    productApp.scrollLeft += widthProductApp;
  }
}

var autoPlay = setInterval(autoNext, 2000); //set thoi gian thuc hien auto next

// dung auto next khi hover chuot
productApp.addEventListener("mouseover", function () {
  clearInterval(autoPlay);
});
// tiep tuc auto next khi het hover
productApp.addEventListener("mouseout", function () {
  return (autoPlay = setInterval(autoNext, 2000));
});

// js de hien icon pos theo san pham
// phan nut pos o list san pham
// so luong icon pos theo so luong san pham
var numPost = Math.ceil(productApp.scrollWidth / productApp.clientWidth);
for (j = numPost - 1; j < iconPosts.length; j++) {
  iconPosts[j].style.display = "none";
}
