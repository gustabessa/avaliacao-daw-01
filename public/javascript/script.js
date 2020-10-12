const pDataHoje = document.getElementById('dataHoje');
pDataHoje.innerHTML = new Intl.DateTimeFormat().format(new Date());

window.onscroll = function() {myFunction()};

var main = document.getElementById("main");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    main.classList.add("pt-100")
  } else {
    navbar.classList.remove("sticky");
    main.classList.remove("pt-100")
  }
}