define(function () {
  // hien va an menu mobile
  var btnMenu = document.querySelector("#btn-menu");
  var menuMobile = document.querySelector("#menu--mobile-js");

  btnMenu.onclick = function () {
    menuMobile.classList.add("show");
  };
  var btnClose = document.querySelector("#btn-close");
  btnClose.onclick = function () {
    menuMobile.classList.remove("show");
  };
});
