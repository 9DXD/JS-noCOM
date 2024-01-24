javascript:(() => {
  /* This is an auto-updating script for script.js */
  const url = "https://raw.githubusercontent.com/9DXD/JS-noCOM/master/script.js";
  fetch(url)
    .then(response => response.text())
    .then(text => eval(text))
    /* .catch(error => console.error(error)); */
})();
