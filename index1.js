window.addEventListener("load", rocketStart);
setTimeout(rocketStart, 5000);

document.querySelector("#puzzel_2").addEventListener("mouseover", rocketStart);
function rocketStart() {
  document.querySelector("#puzzel_2").classList.add("puzzleAnimate1");
  document.querySelector("#puzzel_2").addEventListener("animationend", () => {
    console.log("test");
    document.querySelector("#puzzel_2").style.display = "none";
    document.querySelector("#puzzel_1").style.display = "none";
    document
      .querySelector(".main-wrapper-index-area1 #puzzel_1b")
      .classList.add("puzzleAnimate2");
  });
  document
    .querySelectorAll(
      ".main-wrapper-index-area1 #puzzel_1a, .main-wrapper-index-area1 #puzzel_1b, .main-wrapper-index-area1 #puzzel_1c "
    )
    .forEach(e => {
      e.style.display = "block";
    });
  document
    .querySelector(".main-wrapper-index-area1 #puzzel_1b")
    .addEventListener("animationend", restart);
}

console.log("window", window.innerWidth);
function restart() {
  document.querySelector("#puzzel_2").classList.remove("puzzleAnimate1");
  document.querySelector("#puzzel_2").style.display = "block";
  document.querySelector("#puzzel_1").style.display = "block";
  document
    .querySelectorAll(
      ".main-wrapper-index-area1 #puzzel_1a, .main-wrapper-index-area1 #puzzel_1b, .main-wrapper-index-area1 #puzzel_1c "
    )
    .forEach(e => {
      e.style.display = "none";
    });
}

//  get data portfolio

function get() {
  fetch("https://cartoon-0a3f.restdb.io/rest/portfolio", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5c7cee44cac6621685acbae4	",
      "cache-control": "no-cache"
    }
  })
    .then(e => e.json())
    .then(data => data.forEach(showData));
}
get();
function showData(e) {
  console.log("test");
  const template = document.querySelector(".templatePortfolio").content;

  let copy = template.cloneNode(true);
  copy.querySelector("img").src =
    "https://cartoon-0a3f.restdb.io/media/" + e.IMG[0];

  copy.querySelector("h1").textContent = e.title;
  copy.querySelector("p").textContent = e.short_description;
  copy.querySelector("button").dataset.id = e._id;
  copy.querySelector("button").addEventListener("click", event => {
    console.log(event.target.dataset.id);
    window.location.href = "#projectSection";
    document.querySelector(".projectSection").classList.add("show");
    document.querySelector(".portfolioSection").classList.add("hide");
    if ((event.target.dataset.id = e._id)) {
      document.querySelector(".projectSection h1").textContent = e.title;
      document.querySelector(".projectSection p").textContent =
        e.long_description;
      document.querySelector(".container div:nth-child(1) img").src =
        "https://cartoon-0a3f.restdb.io/media/" + e.IMG[0];
      document.querySelector(".container div:nth-child(2) img").src =
        "https://cartoon-0a3f.restdb.io/media/" + e.IMG[1];
      document.querySelector(".container div:nth-child(3) img").src =
        "https://cartoon-0a3f.restdb.io/media/" + e.IMG[2];
      document.querySelector(".row div:nth-child(1) img").src =
        "https://cartoon-0a3f.restdb.io/media/" + e.IMG[0];
      document.querySelector(".row div:nth-child(2) img").src =
        "https://cartoon-0a3f.restdb.io/media/" + e.IMG[1];
      document.querySelector(".row div:nth-child(3) img").src =
        "https://cartoon-0a3f.restdb.io/media/" + e.IMG[2];
    }
    document.querySelector(".closeModal").addEventListener("click", event => {
      document.querySelector(".projectSection").classList.add("hide");
      document.querySelector(".projectSection").classList.remove("show");
      document.querySelector(".portfolioSection").classList.remove("hide");
    });
  });

  document.querySelector(".portfolio-wrapper").appendChild(copy);
}

window.addEventListener("scroll", myFunction);

function myFunction() {
  if (
    document.querySelector(".contactSection").getBoundingClientRect().top <= 10
  ) {
    document.querySelector("#nav-contact").style.backgroundImage =
      "url(img/blueBox.png)";
    document.querySelector("#nav-contact").style.color = "#022b3a";
  } else {
    document.querySelector("#nav-contact").style.backgroundImage = "";
    document.querySelector("#nav-contact").style.color = "white";
  }
  if (
    document.querySelector(".portfolioSection").getBoundingClientRect().top <=
      10 &&
    document.querySelector(".portfolioSection").getBoundingClientRect().top >
      -document.querySelector(".portfolioSection").getBoundingClientRect()
        .height +
        20
  ) {
    document.querySelector("#nav-portfolio").style.backgroundImage =
      "url(img/greyBox2.png)";
    document.querySelector("#nav-portfolio").style.color = "#022b3a";
  } else {
    document.querySelector("#nav-portfolio").style.backgroundImage = "";
    document.querySelector("#nav-portfolio").style.color = "white";
  }
  // console.log(
  //   document.querySelector(".portfolioSection").getBoundingClientRect().top
  // );
  if (
    document.querySelector(".aboutSection").getBoundingClientRect().top <= 10 &&
    document.querySelector(".aboutSection").getBoundingClientRect().top >
      -document.querySelector(".aboutSection").getBoundingClientRect().height +
        20
  ) {
    document.querySelector("#nav-about").style.backgroundImage =
      "url(img/greyBox1.png)";
    document.querySelector("#nav-about").style.color = "#022b3a";
  } else {
    document.querySelector("#nav-about").style.backgroundImage = "";
    document.querySelector("#nav-about").style.color = "white";
  }
}
// document.querySelectorAll("a").forEach(e => {
//   e.addEventListener("click", () => {
//     window.removeEventListener("scroll", myFunction);
//   });
//   window.addEventListener("scroll", myFunction);
// });

// navigation

document.querySelector("#nav-icon3").addEventListener("click", () => {
  document.querySelector("#nav-icon3").classList.toggle("open");
  document.querySelector(".header-area-2").classList.toggle("showNav");

  var btns = document.querySelectorAll(".header-area-2 a");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener(
      "click",
      function(event) {
        console.log("clicked");
        document.querySelector(".header-area-2").classList.remove("showNav");
        document.querySelector("#nav-icon3").classList.remove("open");
      },
      false
    );
  }
});

console.log(document.querySelector("#puzzel_1").offsetHeight);
