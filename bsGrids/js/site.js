const gridsNav = document.querySelector("#gridsNav");
const gridsBtn = document.querySelector("#gridsNavBtn");

const gridsBtnAction = () => {
  gridsBtn.classList.toggle("border");
  gridsNav.toggleAttribute("hidden");
};

gridsBtn.onclick = gridsBtnAction;
