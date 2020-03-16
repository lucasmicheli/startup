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

const btnMsg = document.getElementById("btn-msg").addEventListener("click", alertMessage);

// Exercise 3

function enjoyJoke(){
  fetch('http://api.icndb.com/jokes/random')
  .then((resp) => {
      if (!resp.ok) {
          throw new Error('No Response');
        }
      return resp.json();
  })
  .then((jokeData) => {
      const newJoke = document.getElementById("new-joke");
      newJoke.innerText = jokeData.value.joke;
  })
  .catch((error) => {
      let jokeSection = document.getElementsByClassName("joke-section")[0];
      jokeSection.style.background = "red";
      console.log(error);
  });
}

const btnJoke = document.getElementById("btn-joke").addEventListener("click", enjoyJoke);
