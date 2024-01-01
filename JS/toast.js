// const modal = document.querySelector(".modal");
const toastView = document.querySelector(".toast");
//   modalUpdate = document.querySelector(".modalUpdate");

export const toast = (span) => {
  const beforetoast = toastView.querySelector(".loader");
  span = toastView.querySelector("span");
  //   span.innerHTML = res.data;

  beforetoast.classList.add("active");
  beforetoast.classList.remove("bg-gray-200");

  //   modal.classList.remove("showModal");

  //   modalUpdate.classList.remove("showModal");
  toastView.classList.remove("hideToast");
  toastView.classList.add("showToast");

  toastView.addEventListener("click", () => {
    toastView.classList.remove("showToast");
    toastView.classList.add("hideToast");
  });

  setTimeout(() => {
    beforetoast.classList.add("bg-gray-200");
    beforetoast.classList.remove("active");
    toastView.classList.remove("showToast");
    toastView.classList.add("hideToast");
  }, 5000);
  //   return res;
};
