const Form = document.querySelector("form");
const list = document.getElementById("list");
Form.onsubmit = function (event) {
  event.preventDefault();

  const inputnode = document.getElementById("content");
  console.log(inputnode.value);
  const li = document.createElement("li");
  li.innerText = inputnode.value;
  li.onclick = function (event) {
    event.currentTarget.classList.toggle("strike");
  };
  list.appendChild(li);
  inputnode.value = "";

  const deletebotton = document.createElement("button");
  deletebotton.innerText = "Delete";
};
