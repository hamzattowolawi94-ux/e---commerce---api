const buttons=
document.querySelectorAll
  (".product button");

buttons.forEach(function(button)  {

button.addEventListener
  ("click", function() {
              alert("Product
added to cart");
    });
});
