const rmbn = document.querySelector("#rmbn");

rmbn.onclick = () => {
  rmbn.innerText = rmbn.innerText === "Read More" ? "Read Less" : "Read More";
};
