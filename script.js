const text01 = document.querySelector(".text01");
const text02 = document.querySelector(".text02");
const monanima2 = document.querySelector(".monanima2");
const text03 = document.querySelector(".text03");
const monanima3 = document.querySelector(".monanima3");
const text04 = document.querySelector(".text04");
const monanima4 = document.querySelector(".monanima4");
const text05 = document.querySelector(".text05");
const monanima5 = document.querySelector(".monanima5");

window.onload = () => {
  document.querySelector(".monanima").classList.add("active");
  setTimeout(() => {
    text01.style.visibility = "hidden";
  }, 2000);

  

  setTimeout(() => {
    monanima2.style.visibility = "visible";
    text02.style.visibility = "visible";
    monanima2.classList.add("active");
  }, 2000);
  setTimeout(() => {
    text02.style.visibility = "hidden";
  }, 5000);



  setTimeout(() => {
    monanima3.style.visibility = "visible";
    text03.style.visibility = "visible";
    monanima3.classList.add("active");
  }, 5000);
  setTimeout(() => {
    text03.style.visibility = "hidden";
  }, 15000);



  setTimeout(() => {
    monanima4.style.visibility = "visible";
    text04.style.visibility = "visible";
    monanima4.classList.add("active");
  }, 15000);
  setTimeout(() => {
    text04.style.visibility = "hidden";
  }, 18000);



  setTimeout(() => {
    monanima5.style.visibility = "visible";
    text05.style.visibility = "visible";
    monanima5.classList.add("active");
  }, 18000);

};
