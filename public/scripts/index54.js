const form = document.getElementById("userForm");
const table = document.getElementById("userTable");

const tableContainer = document.getElementById("tableContainer");

let users = ["Per Andersson", "Sam", "Linea", "anders"];
let ages = [20, 854, 574, 87];
let emails = [
  "per.andersson@capcito.com",
  "samarbid13@gmail.com",
  "linnea@gmail.com",
  "anders@gmail.com"
];
const saveUser = document.forms["userForm"];

let name = "[" + saveUser.querySelector('input[type="Text"]').value + "]";
let age = saveUser.querySelector('input[type="number"]').value;
let email = saveUser.querySelector('input[type="email"]').value;
let newUsers = users.concat(name);

function checkUpdate(users, newUsers){
  console.log("users = " + users);
  console.log("newUsers = " + newUsers);
  if (users !== newUsers){
    return true;
  } else {
    return false;
  }
console.log(checkUpdate(users, newUsers));

}
  console.log(name, age, email);

saveUser.addEventListener("submit", function(e) {
  // prevent default actions
  e.preventDefault();

console.log(e);
if(checkUpdate() === true){
tableContainer.innerHTML(theTable);

}

  
  ages.push(age);
  emails.push(email);

 
});

let button =  document.forms["userForm"]

if ((document.activeElement = button)) {
   function populateTable() {
    let theTable = `<table class="table-fixed w-full" id="userTable">
          <thead>
            <tr>
              <th class="text-left w-1/12 p-2 pt-0">#</th>
              <th class="text-left w-3/12 p-2 pt-0">Name</th>
              <th class="text-left w-2/12 p-2 pt-0">Age</th>
              <th class="text-left w-4/12 p-2 pt-0">Email</th>
              <th class="text-left w-2/12 text-right p-2 pt-0"></th>
            </tr>
          </thead>
          <tbody>
          `;

          let theUsers = users.length

          if( theUsers !== users){
for (let i = 0; i < theUsers; i++) {
  theTable += `
            <tr>
              <td id="${i + 1}" class="border-t w-1/12 p-2"> ${i + 1} </td>
              <td class="border-t w-3/12 p-2">${users[i]}</td>
              <td class="border-t w-2/12 p-2">${ages[i]}</td>
              <td class="border-t w-2/12 p-2">${emails[i]}</td>
              <td class="border-t w-2/12 p-2">
                <div class="flex justify-left">
                  <a href="#" class="mr-2">
                    <svg
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
                    </svg>
                  </a>
                  <a href="#">
                    <svg
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
                    </svg>
                  </a>
                </div>
              </td>
            </tr>
            `;
}

theTable += `
          </tbody>
        </table>
        `;

return (tableContainer.innerHTML = theTable);
          }
    
  }
}




// submit new user
