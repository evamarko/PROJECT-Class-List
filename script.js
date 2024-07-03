/* const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  button.classList.remove("btn");
  button.classList.add("btn-ok");
  button.classList.toggle("btn-ok");
}); */

const allArticles = document.querySelectorAll(".switch-article");
allArticles.forEach((oneArticle) => {
  oneArticle.addEventListener("click", () => {
    //oneArticle.classList.toggle("turn-on");
    oneArticle.classList.add("disappear");
  });
});

const button = document.querySelector(".btn");
button.addEventListener("click", () => {
  allArticles.forEach((oneArticle) => {
    oneArticle.classList.remove("disappear");
  });
});
