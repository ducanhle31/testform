requirejs.config({
  baseUrl: "assets/js/app",
});

requirejs(["home/menu-mobile", "listing/category-mobile", "listing/slide"]);
