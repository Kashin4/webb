var goTopBtn = document.querySelector(".back_to_top");

window.addEventListener("scroll", trackScroll);
goTopBtn.addEventListener("click", backToTop);

function trackScroll() {
  var scrolled = window.pageYOffset;
  var coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    goTopBtn.classList.add("back_to_top-show");
  }
  if (scrolled < coords) {
    goTopBtn.classList.remove("back_to_top-show");
  }
}
function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -80);
    setTimeout(backToTop, 0);
  }
}

(function () {
  "use strict";

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add("back_to_top-show");
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove("back_to_top-show");
    }
  }

 

  var goTopBtn = document.querySelector(".back_to_top");

  window.addEventListener("scroll", trackScroll);
  goTopBtn.addEventListener("click", backToTop);
})();



$("body").append('<div class="upbtn"></div>');
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".upbtn").css({
      right: "55px",
    });
  } else {
    $(".upbtn").css({
      right: "-80px",
    });
  }
});
$(".upbtn").on("click", function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    500
  );
  return false;
});

// ================================

  var delay_popup = 5000;

  setTimeout(
    "document.getElementById('parent_popup').style.display='block'",
    delay_popup
);

document.querySelector(".closs").onclick = function () {
  document.getElementById("parent_popup").style.display = "none";
};
  

var popup = document.querySelector(".parent__popup");
document.addEventListener("mousedown", function (e) {
  if (e.target.closest(".popup") === null) {
    popup.style.display = "none";
  }
});


// ==============time==============
function startTimer(duration, display) {
var timer = duration, minutes, seconds;
let kekw = setInterval(function () {
minutes = parseInt(timer / 60, 10);
seconds = parseInt(timer % 60, 10);

minutes = minutes < 10 ? "0" + minutes : minutes + "";
seconds = seconds < 10 ? "0" + seconds : seconds + "";

// display.textContent = minutes + ":" + seconds;
display.innerHTML= `<span class="first-number">${minutes[0]}</span><span class="second-number">${minutes[1]}</span>: <span class="third-number">${seconds[0]}</span><span class="four-number">${seconds[1]}</span>`;

if (--timer < 0) {
clearInterval(kekw);
}
}, 1000);
}



window.onload = function () {
var fiveMinutes = 90,
display = document.querySelector('#time');
startTimer(fiveMinutes, display);
};