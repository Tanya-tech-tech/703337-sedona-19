var link = document.querySelector(".sent");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".close");
var form = document.querySelector("form");
var error = document.querySelector(".modal-something-wrong");
var ok = error.querySelector(".ok");

var nick = form.querySelector("[name=nick]");
var surname = form.querySelector("[name=surname]");
var tel = form.querySelector("[name=tel]");
var email = form.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

link.addEventListener("click", function (evt) {
  if (!nick.value || !surname.value || !tel.value || !email.value) {
    evt.preventDefault();
    error.classList.add("modal-error");
  }
});

ok.addEventListener("click", function (evt) {
  evt.preventDefault();
  error.classList.remove("modal-error");
});

link.addEventListener("click", function () {
 if (nick.value && surname.value && tel.value && email.value) {
      
      popup.classList.add("modal-show");
    }
  });

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
