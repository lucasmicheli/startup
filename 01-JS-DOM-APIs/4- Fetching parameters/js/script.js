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
  });
}

const btnJoke = document.getElementById("btn-joke").addEventListener("click", enjoyJoke);

// Exercise 4

const btnSearchRepo = document.getElementById("btn-search-repo").addEventListener("click", searchRepo);

function searchRepo(){
  const searchInput = document.getElementById("input-search-repo").value;
  fetch("https://api.github.com/search/repositories?q="+searchInput)
  .then((resp) => {
      if (!resp.ok) {
          throw new Error('Failed Response');
        }
      return resp.json();
  })
  .then((repoData) => {
    let repoItem = document.getElementById('repo-list');
    for(let i of repoData.items){
        repoItem.innerHTML += `<li>Repo: ${i.name} <a href="${i.html_url}"> Visit </a></ul>`;
    }
  })
  .catch((error) => {
    let repoItem = document.getElementById('repo-list');
    repoItem.innerHTML = "Error ocurred.";
    console.log(error);
  });
}