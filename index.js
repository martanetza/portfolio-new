function getAbout() {
  fetch("https://cartoon-0a3f.restdb.io/rest/portfolio2", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5c7cee44cac6621685acbae4	",
      "cache-control": "no-cache"
    }
  })
    .then(e => e.json())
    .then(data => data.forEach(showDataAbout));
}
getAbout();
function showDataAbout(e) {
  console.log("test");
  const template = document.querySelector(".templateAbout").content;

  let copy = template.cloneNode(true);

  copy.querySelector("p").textContent = e.text;
  copy.querySelector("article").dataset.id = e.myID;

  copy.querySelector("button").addEventListener("click", e => {
    e.preventDefault();

    document.querySelector("#about-details").style.display = "none";
    document.querySelector("#about-open").style.display = "block";
    document.querySelector(".text-1aa").classList.remove("text-1aa");
    document.querySelector(".cls-1aa").classList.remove("cls-1aa");
  });

  document.querySelector("#about-details").appendChild(copy);
}

var text1 = document.querySelector(".text-1");
var puzzel1 = [];
var puzzel2 = [];
var puzzel3 = [];
var puzzel4 = [];
var puzzelAll = [];
puzzel1 = document.querySelectorAll("#cls-0, #text-0");
//puzzel1.push(document.querySelector('#cls-0'), document.querySelector('#text-0'))
puzzel2.push(
  document.querySelector("#cls-1"),
  document.querySelector("#text-1")
);
puzzel3.push(
  document.querySelector("#cls-2"),
  document.querySelector("#text-2")
);
puzzel4.push(
  document.querySelector("#cls-3"),
  document.querySelector("#text-3")
);
puzzelAll.push(puzzel1, puzzel2, puzzel3, puzzel4);

function showPuzzel() {
  for (let i = 0; i < puzzelAll.length; i++) {
    console.log(puzzelAll);

    puzzelAll[i].forEach(function(elem) {
      elem.addEventListener("click", () => {
        if (document.querySelector(".text-1aa")) {
          document.querySelector(".text-1aa").classList.remove("text-1aa");
          document.querySelector(".cls-1aa").classList.remove("cls-1aa");
        }
        document.querySelector("#text-" + i).classList.add("text-1aa");
        document.querySelector("#cls-" + i).classList.add("cls-1aa");
        document.querySelector("#about-details").style.display = "block";
        document.querySelector("#about-open").style.display = "none";

        console.log(document.querySelectorAll(".boxAbout"));
        document.querySelectorAll(".boxAbout").forEach(e => {
          console.log(i);
          if (e.dataset.id == i) {
            e.style.display = "block";
          } else {
            e.style.display = "none";
          }
        });
      });

      elem.addEventListener("mouseover", function(n) {
        document.querySelector(".main-wrapper-about-area1 img ").style.display =
          "none";
        document.querySelector("#text-" + i).classList.add("text-1a");
        //  document.querySelector('#cls-'+i).classList.remove('cls-'+i);
        document.querySelector("#cls-" + i).classList.add("cls-1a");
      });
    });
    puzzelAll[i].forEach(function(elem) {
      elem.addEventListener("mouseout", function() {
        document.querySelector(".main-wrapper-about-area1 img ").style.display =
          "block";
        document.querySelector("#text-" + i).classList.remove("text-1a");
        document.querySelector("#cls-" + i).classList.remove("cls-1a");
        document.querySelector("#cls-" + i).classList.add("cls-" + i);
      });
    });
  }
}
showPuzzel();
