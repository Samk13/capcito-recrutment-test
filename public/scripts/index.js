const form = document.getElementById("userForm");
const table = document.getElementById("userTable");

const tableBody = document.querySelector("#userTable > tbody");

function loadJsonData() {
  const req = new XMLHttpRequest();

  req.open("get", "data/data.json");
  req.onload = () => {
    try {
      const json = JSON.parse(req.responseText);
      populateData(json);
    } catch (e) {
      console.warn("Could not load JSON! 😐");
    }
  };
  req.send();
}

function populateData(json) {
  // console.log(json);

  // clear existing HTML
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }

  // populate table
  json.forEach(row => {
    const tr = document.createElement("tr");
    row.forEach(cell => {
      // console.log(cell);
      const td = document.createElement("td");
      td.textContent = cell;
      // td.classList.add(nameClass);
      tr.appendChild(td);
    });
    tableBody.appendChild(tr);
  });
}

$(document).ready(function() {
  // add specific classes to every cell

  const indexClass = "text-left w-1/12 p-2 pt-0";
  const nameClass = "text-left w-3/12 p-2 pt-0";
  const ageClass = "text-left w-2/12 p-2 pt-0";
  const emailClass = "text-left w-4/12 p-2 pt-0";

  $("tr > td:first-child").addClass(indexClass);
  $("tr td:nth-child(2)").addClass(nameClass);
  $("tr td:nth-child(3)").addClass(ageClass);
  $("tr td:nth-child(4)").addClass(emailClass);


});

document.addEventListener("DOMContentLoaded", () => {
  loadJsonData();
});
