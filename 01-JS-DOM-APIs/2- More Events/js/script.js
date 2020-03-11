// Exercise 1

(function () {
    window.addEventListener("load", function (event) {
      let hiddenSection = document.getElementsByClassName("hidden-section")[0];
      setTimeout(() => { hiddenSection.hidden = true; }, 2500);
    })
})();

// Exercise 2

function alertMessage(){
  alert("This is the alert message.");
};

const btnMsg = document.getElementById("btn-msg").onclick = alertMessage;