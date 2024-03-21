const app = document.querySelector("#app");

const heading = document.createElement("h1");
heading.innerText = "Min GalarPar";
heading.classList.add("heading");
heading.id = "myheading";
heading.title = "helloheading";
heading.setAttribute("data-id", 3);
// console.log(heading);

const createList = (text) => {
  const list = document.createElement("li");
  list.innerText = text;
  return list;
};
// document.body.append(heading);

const lists = document.createElement("ul");
// const list1 = document.createElement("li");
// list1.innerText = "innerTextLi1";

// const list2 = document.createElement("li");
// list2.innerText = "innerTextLi2";

// const list3 = document.createElement("li");
// list3.innerText = "innerTextLi3";
// lists.append(list1);
// lists.append(list2);
// lists.append(list3);

const textInput = document.createElement("input");
textInput.type = "text";
textInput.placeholder = "Say something";

const btn = document.createElement("button");
btn.innerText = "add new";
btn.onclick = () => {
  console.log(textInput.value);
  lists.append(createList(textInput.value));

  textInput.value = null;
};

// console.log(btn);

app.append(heading);
app.append(lists);
app.append(textInput);
app.append(btn);
//document.body.append(heading)
// lists.before(heading);
// lists.after(textInput);
// textInput.after(btn);
