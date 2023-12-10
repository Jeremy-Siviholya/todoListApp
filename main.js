const input = document.querySelector("input");
const button = document.querySelector("button");
const box = document.querySelector("#box");
const span = document.getElementById("span");
const alertDanger = document.querySelector(".danger-alert");
const alertSuccess = document.querySelector(".alert-success");
const alertDestroy = document.querySelector(".alert-destroy");

const handleAdd = (e) => {
  const nodeL = document.getElementById("tasks").content.cloneNode(true);
  const firstel = nodeL.firstElementChild;
  if (input.value === "") {
    showAlert(alertDanger);
  } else {
    const value = input.value;
    box.appendChild(nodeL);
    showAlert(alertSuccess);
    input.value == "";
    firstel.querySelector("span").innerHTML = value;
    const btn = firstel.querySelector("button");
    const check = firstel.querySelector("input");
    check.addEventListener('click',()=>verify)
    btn.addEventListener("click", () => deleteTasks(firstel));
    
  }
};

const verify=(e)=>{
    e.target.classList.add('check')
}

const deleteTasks = (element) => {
  element.remove();
  showAlert(alertDestroy);
  return element;
};

const closeAlert = (el) => {
  el.addEventListener("click", (e) =>{
     e.target.classList.add('hide')
  }
  )
  return el;
};

const showAlert =  (element) => {
  document.querySelector('.show')?.classList.remove('show')
  element.classList.add("show");
  setTimeout(() => {
    element.classList.add("hide");
  }, 10000);
};

closeAlert(alertDanger);
closeAlert(alertSuccess);

button.addEventListener("click", handleAdd);
