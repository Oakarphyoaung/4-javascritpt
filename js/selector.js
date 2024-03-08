console.log("query selector");

//tag
// const els = document.querySelectorAll("li");
// console.log(els);
// console.log(els[0]);
// console.log(els[1]);
// els.forEach((el, index) => {
//     el.innerText += " - loop" + index * 5;
//     return els;
//   });

//id
// const yourName = document.querySelector("#yourName");
// yourName.value = "Oakar Phyo ";
//class
//attribute

// for (el of els) {
//   el[0].innerText = "san kyi tar";
//   console.log(el);
// }

//pseudo class

//set style
const h1 = document.querySelector("h1");
// console.log(h1);
// h1.style.color = "red";
// h1.style.backgroundColor = "yellow";
// h1.style.textAlign = "center";
// h1.style.padding = "20px";
//get style
// const h1 = document.querySelector("h1");
// console.log(h1.style);
// console.log(h1.style.color);

//get class
// console.log(h1.classList);

// console.log(h1.className);
// h1.classList.add("dd");
// h1.classList.add("gg");
// h1.classList.replace("aa", "hh");
// h1.classList.contains("bb");\

//get attr

// const link1 = document.querySelector("#link1");
// const link2 = document.querySelector("#link2");

// console.log(link1.href);
// console.log(link2.href);

//set attr
// link1.href = "https://youtube.com";
// console.log(link1.href);
// link1.href = "https://ohkar.com";
// console.log(link1.href);
// link1.href = "https://https://mms-it.com";
// console.log(link1.href);

const buddid = document.querySelector("#buddih");

// console.log(buddid.getAttribute("src"));

const changeImg = (src) => {
  buddid.src = src;
};

const hsPhoto = document.querySelector(".hs-photo");
const toggleImg = () => {
  hsPhoto.classList.toggle("active");
};
