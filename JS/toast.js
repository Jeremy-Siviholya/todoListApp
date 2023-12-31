// const modal = document.querySelector(".modal");
const toastView = document.querySelector(".toast");
//   modalUpdate = document.querySelector(".modalUpdate");

const beforetoast = toastView?.querySelector(".loader");
export const toast = () => {
  const span = toastView.querySelector("span");
  //   span.innerHTML = res.data;
  beforetoast?.classList?.add("active");
  //   modal.classList.remove("showModal");

  //   modalUpdate.classList.remove("showModal");
  toastView.classList.remove("hideToast");
  toastView.classList.add("showToast");

  toastView.addEventListener("click", () => {
    toastView.classList.remove("showToast");
    toastView.classList.add("hideToast");
  });

  setTimeout(() => {
    toastView.classList.remove("showToast");
    toastView.classList.add("hideToast");
  }, 5000);
  //   return res;
};
