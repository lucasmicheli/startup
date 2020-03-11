(function () {
    window.addEventListener("load", function (event) {
      let hiddenSection = document.getElementsByClassName("hidden-section")[0];
      setTimeout(() => { hiddenSection.hidden = true; }, 2500);
    })
})();