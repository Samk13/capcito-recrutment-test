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

// add specific classes to every cell

const indexClass = '"border-t""w-1/12""p-2"';
const nameClass = '"border-t""w-3/12""p-2"';
const ageClass = '"border-t""w-2/12""p-2"';
const emailClass = '"border-t""w-2/12""p-2"';

$(document).ready(function(){

  $("tbody tr td:eq(0)").addClass(indexClass);
  $("tbody tr td:eq(1)").addClass(nameClass);
  $("tbody tr td:eq(2)").addClass(ageClass);
  $("tbody tr td:eq(3)").addClass(emailClass);

})



$("td").click(function() {
  var col = $(this)
    .parent()
    .children()
    .index($(this));
  var row = $(this)
    .parent()
    .parent()
    .children()
    .index($(this).parent());
  console.log("Row: " + row + ", Column: " + col);
});

document.addEventListener("DOMContentLoaded", () => {
  loadJsonData();
});
