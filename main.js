
const input = document.querySelector("input");
const button = document.querySelector("button");
const box = document.querySelector("#box");
const span = document.getElementById("span");
const alertDanger = document.querySelector(".danger-alert");
const alertSuccess = document.querySelector(".alert-success");

const handleAdd = (e) => {
    const nodeL = document.getElementById("tasks").content.cloneNode(true);
    const firstel = nodeL.firstElementChild;
  if (input.value == "") {
   
        alertDanger.classList.add("show");
        setTimeout(() => {
             alertDanger.classList.add("hide");
        }, 7000);
    
  } else {
    const value = input.value;
    box.appendChild(nodeL);
      alertSuccess.classList.add("show");
      setTimeout(() => {
        alertDanger.classList.add("hide");
      }, 7000);
    firstel.querySelector("span").innerHTML = value;
    const btn = firstel.querySelector("button");
    btn.addEventListener("click", () => deleteTasks(firstel));
}
};

const deleteTasks = (element) => {
  element.remove();
  return element;
};

const closeAlert=(el)=>{
    el.addEventListener('click',(e)=> e.target.classList.add('hide'))
    return el
}

closeAlert(alertDanger)
closeAlert(alertSuccess)

button.addEventListener("click", handleAdd);
