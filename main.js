import { toast } from "./JS/toast.js";

const input = document.querySelector("input");
const button = document.querySelector("button");
const box = document.querySelector("#box");
const span = document.getElementById("span");
const alertDanger = document.querySelector(".danger-alert");
const alertSuccess = document.querySelector(".alert-success");
const alertDestroy = document.querySelector(".alert-destroy");
const check = document.querySelector(".check");
const alertClick = document.querySelector(".alert-click");

const handleAdd = (e) => {
  const nodeL = document.getElementById("tasks").content.cloneNode(true);
  const firstel = nodeL.firstElementChild;
  if (input.value === "") {
    toast();
    showAlert(alertDanger);
  } else {
    const value = input.value;
    box.appendChild(nodeL);
    showAlert(alertSuccess);
    input.value = "";
    firstel.querySelector("span").innerHTML = value;
    const btn = firstel.querySelector("button");
    btn.addEventListener("click", () => deleteTasks(firstel));
    firstel.querySelector("i").addEventListener("click", (e) => {
      e.target.classList.toggle("text-perfectGreen-300");
      firstel.querySelector("span").classList.toggle("line-through");
    });
  }
};

const deleteTasks = (element) => {
  element.remove();
  showAlert(alertDestroy);
  return element;
};

const closeAlert = (el) => {
  el.addEventListener("click", (e) => {
    e.target.classList.add("hide");
  });
  return el;
};

const showAlert = (element) => {
  element.classList.add("show");
  setTimeout(() => {
    element.classList.add("hide");
  }, 10000);
  element?.classList?.remove("hide");
};

closeAlert(alertDanger);
closeAlert(alertSuccess);
closeAlert(alertDestroy);

button?.addEventListener("click", handleAdd);
