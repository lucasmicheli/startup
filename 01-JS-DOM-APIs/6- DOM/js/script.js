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
      let newJoke = document.getElementById("new-joke");
      newJoke.innerText = jokeData.value.joke;
  })
  .catch((error) => {
      let jokeSection = document.getElementsByClassName("joke-section");
      jokeSection.style.background = "red";
  });
}

const btnJoke = document.getElementById("btn-joke").onclick = enjoyJoke;

// Exercise 4

const btnSearchRepo = document.getElementById("btn-search-repo").onclick = searchRepo;

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

const btnTable = document.getElementById("btn-table").onclick = genTable;

const courses = [
  { course: "How to be a champion.", hours: 85, teacher: "Lionel Messi" },
  { course: "Intro to opera singing.", hours: 40, teacher: "Phil Collins" },
  { course: "Create an Apple II in less than 5 hours.", hours: 5, teacher: "Steve Wozniak" },
  { course: "How to improve your top & slice.", hours: 8, teacher: "Roger Federer" },
  { course: "Business & Philantrophy 101.", hours: 20, teacher: "Bill Gates" }
];

function genTable(courses) {
  var tableSection = document.getElementsByClassName('table');
  var table = document.createElement('table');
  table.setAttribute("class", "new-table");

  var thead = document.createElement('thead');
  
  var tr = document.createElement('tr');

  var th = document.createElement('th');
  th.appendChild(document.createTextNode('Course'));
  tr.appendChild(th);

  var th = document.createElement('th');
  th.appendChild(document.createTextNode('Hours'));
  tr.appendChild(th);

  var th = document.createElement('th');
  th.appendChild(document.createTextNode('Teacher'));
  tr.appendChild(th);

  thead.appendChild(tr);

  table.appendChild(thead);

  var tbody = document.createElement('tbody');

  for (var i = 0; i < courses.length; i++) {
    var tr = document.createElement('tr');
    var tCourse = document.createElement('td');
    var tHours = document.createElement('td');
    var tTeacher = document.createElement('td');
    tCourse.appendChild(document.createTextNode(courses[i].course));
    tHours.appendChild(document.createTextNode(courses[i].hours));
    tTeacher.appendChild(document.createTextNode(courses[i].teacher));
    tr.appendChild(tCourse);
    tr.appendChild(tHours);
    tr.appendChild(tTeacher);
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  
  tableSection.appendChild(table);
}
