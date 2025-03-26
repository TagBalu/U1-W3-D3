function Additem() {
  const List = document.querySelector("ul");
  let Element = document.createElement("li");
  Element.textContent = document.querySelector("input").value;

  List.appendChild(Element);
}

document.querySelector("button").addEventListener("click", Additem);

function Bar(e) {
  let Elementlist = e.target;
  Elementlist.classList("Sbarrato");
}

document.querySelector("ul").addEventListener("click", Bar);
