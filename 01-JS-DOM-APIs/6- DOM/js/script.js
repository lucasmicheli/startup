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

// Exercise 6

const courses = [
  { course: "How to be a champion.", hours: 85, teacher: "Lionel Messi" },
  { course: "Intro to opera singing.", hours: 40, teacher: "Phil Collins" },
  { course: "Create an Apple II in less than 5 hours.", hours: 5, teacher: "Steve Wozniak" },
  { course: "How to improve your top & slice.", hours: 8, teacher: "Roger Federer" },
  { course: "Business & Philantrophy 101.", hours: 20, teacher: "Bill Gates" }
];

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
  }
}
  
function generateTable(table, data) {
  for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
      }
  }
}

let table = document.querySelector("table");
let data = Object.keys(courses[0]);
generateTable(table, courses); // generate the table first
generateTableHead(table, data); // then the head