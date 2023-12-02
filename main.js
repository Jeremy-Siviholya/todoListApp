
const input = document.querySelector("input");
const button = document.querySelector("button");
const box = document.querySelector("#box");
const span = document.getElementById("span");
const alertDanger = document.querySelector(".danger-alert");

const handleAdd = (e) => {
    const nodeL = document.getElementById("tasks").content.cloneNode(true);
    const firstel = nodeL.firstElementChild;
  if (input.value == "") {
    alertDanger.classList.add("show");
  } else {
    const value = input.value;
    box.appendChild(nodeL);
    firstel.querySelector("span").innerHTML = value;
    const btn = firstel.querySelector("button");
    btn.addEventListener("click", () => deleteTasks(firstel));
}
};

const deleteTasks = (element) => {
  element.remove();
  return element;
};


button.addEventListener("click", handleAdd);
