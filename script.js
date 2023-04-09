const container = document.querySelector(".container");
const heartIcon = container.querySelector("img");
container.addEventListener("dblclick", (e) => {
  //calculate cooradinates for placing heart
  let Xvalue = e.clientX - e.target.offsetLeft;
  let Yvalue = e.clientY - e.target.offsetTop;
  heartIcon.style.left = `${Xvalue}px`;
  heartIcon.style.top = `${Yvalue}px`;

  heartIcon.classList.add("dhak-dhak");
  //remove animation class after 1 sec
  setTimeout(() => {
    heartIcon.classList.remove("dhak-dhak");

  
  }, 700);
});
