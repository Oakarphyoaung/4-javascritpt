// area function

// const area = (h, w) => {
//   return w * h;
// };

// console.log(area(20, 40));
// user level

// window

// window.alert("san kyit thar");
// const width = window.prompt("width");
// const height = window.prompt("height");
// window.alert(area(width, height));
// document.write(area(width, height));
// const x = window.confirm("eating launch");

// window.alert(x ? "စားပီးပီး" : "မစားရသေး");

// console.log(window.console);
const heading = document.getElementById("heading");
const btn = document.getElementById("btn");
const textInput = document.getElementById("textInput");

const run = () => {
  //input
  const data = textInput.value;

  heading.innerText = data;
};
