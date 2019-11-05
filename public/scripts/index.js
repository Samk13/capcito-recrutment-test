const form = document.getElementById("userForm");
const table = document.getElementById("userTable");

// create import Json Data with XMLHttpRequest

const tableBody = document.querySelector("#userTable > tbody");

function loadJsonData() {
  const req = new XMLHttpRequest();

  req.open("get", "data/data.json");
  req.onload = () => {
    try {
      const json = JSON.parse(req.responseText);
      populateData(json);
    } catch (e) {
      console.warn(e + "/ Could not load JSON! 😐");
    }
  };
  req.send();
}
document.addEventListener("DOMContentLoaded", () => {
  loadJsonData();
});

function populateData(json) {
  console.log(json);

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

//JQuery

$(document).ready(function() {
  // add specific classes to every cell

  const indexClass = "border-t w-1/12 p-2";
  const nameClass = "border-t w-3/12 p-2";
  const ageClass = "border-t w-2/12 p-2";
  const emailClass = "border-t w-2/12 p-2";

  $("tr td:nth-child(1)").addClass(indexClass);
  $("tr td:nth-child(2)").addClass(nameClass);
  $("tr td:nth-child(3)").addClass(ageClass);
  $("tr td:nth-child(4)").addClass(emailClass);

  // append svg Icons

  $("tr").append("<td></td>");
  $("tr td:nth-child(5)").addClass(emailClass);
  $("tr td:nth-child(5)").append("<div></div>");
  $("td div").addClass("flex justify-left");
  $("td div").append("<a></a>");
  $("td div").append("<a></a>");
  $("div a:nth-child(1)").addClass("mr-2");
  $("div a:nth-child(1)").attr("href", "#");
  $("div a:nth-child(2)").attr("href", "#");
  $("div a:nth-child(2)").attr("id", "trash");
  $("div a:nth-child(1)").append(`<svg
                   
                      class="w-5 h-5 stroke-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-edit-3"
                    >
                      <path d="M12 20h9"></path>
                      <path
                        d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
                      ></path>
                    </svg>`);

  $("div a:nth-child(2)").append(`<svg
                      class="w-5 h-5 stroke-current"
                      
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-trash-2"
                    >
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path
                        d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                      ></path>
                      <line x1="10" y1="11" x2="10" y2="17"></line>
                      <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>`);

  // delete button function 
  $("#userTable").on("click", "#trash", function() {
    $(this).parent().parent().parent().remove();
  });

  
});

