// selector

const result = document.getElementById("result");
const widthInput = document.getElementById("widthInput");
const heigthInput = document.getElementById("heightInput");
const calcBtn = document.getElementById("calcBtn");
const records = document.getElementById("records");

// logic function
const area = (w, h) => w * h;

// event listen
const handleBtn = () => {
  const areaResult = area(widthInput.valueAsNumber, heigthInput.valueAsNumber);
  result.innerHTML = `${widthInput.valueAsNumber} ft * ${heigthInput.valueAsNumber} = ${areaResult} ft<sup>2</sup>`;
  widthInput.value = null;
  heigthInput.value = null;
};

const clearResult = () => {
  result.innerHTML = "";
};
const storeResult = () => {
  records.innerHTML += `<li> ${result.innerHTML}</li>`;
  clearResult();
};
