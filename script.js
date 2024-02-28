"strict mode";
/////////////variable
const html = document.querySelector(".html");
const htmlPanel = document.querySelector(".panel-html");
const css = document.querySelector(".CSS");
const cssPanel = document.querySelector(".panel-css");
const js = document.querySelector(".JavaScript");
const jsPanel = document.querySelector(".panel-javascript");
const php = document.querySelector(".PHP");
const phpPanel = document.querySelector(".panel-php");
const Panel = document.querySelector(".panel");

////////////////////////////////////////
html.addEventListener("click", function () {
  html.classList.toggle("active");

  if (htmlPanel.style.maxHeight) {
    htmlPanel.style.maxHeight = null;
  } else {
    htmlPanel.style.maxHeight = htmlPanel.scrollHeight + "px";
  }
});
css.addEventListener("click", function () {
  css.classList.toggle("active");

  if (cssPanel.style.maxHeight) {
    cssPanel.style.maxHeight = null;
  } else {
    cssPanel.style.maxHeight = cssPanel.scrollHeight + "px";
  }
});
js.addEventListener("click", function () {
  js.classList.toggle("active");
  if (jsPanel.style.maxHeight) {
    jsPanel.style.maxHeight = null;
  } else {
    jsPanel.style.maxHeight = jsPanel.scrollHeight + "px";
  }
});
php.addEventListener("click", function () {
  php.classList.toggle("active");
  if (phpPanel.style.maxHeight) {
    phpPanel.style.maxHeight = null;
  } else {
    phpPanel.style.maxHeight = phpPanel.scrollHeight + "px";
  }
});
