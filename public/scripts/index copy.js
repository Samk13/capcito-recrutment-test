const form = document.getElementById("userForm");
const table = document.getElementById("userTable");

// save new user
const saveUser = document.forms["userForm"];

saveUser.addEventListener("submit", function(e) {
  // prevent default actions
  e.preventDefault();
  
  
  let name = saveUser.querySelector('input[type="Text"]').value;
  let age = saveUser.querySelector('input[type="number"]').value;
  let email = saveUser.querySelector('input[type="email"]').value;
  let userData = [name, age, email];

  // create elements

  const tr = document.createElement("tr");
  const addedName = document.createElement("td");
  const addedAge = document.createElement("td");
  const addedEmail = document.createElement("td");
  const deleteBtn = document.createElement("a");
  const editBtn = document.createElement("a");
  const iconContainer = document.createElement("td");
  const iconDiv = document.createElement("div");
  const index = document.createElement("td");
  
  // add content

  //generate index number 
  let indexGen = document.getElementById("userTable").children[1].children.length + 1;
  index.innerHTML = indexGen;
  addedName.innerHTML = name;
  addedAge.innerHTML = age;
  addedEmail.innerHTML = email;
  deleteBtn.innerHTML = editIcon;
  editBtn.innerHTML = deleteIcon;

  // add classes
  index.classList.add("border-t", "w-1/12", "p-2");
  addedName.classList.add("border-t", "w-3/12", "p-2");
  addedAge.classList.add("border-t", "w-2/12", "p-2");
  addedEmail.classList.add("border-t", "w-2/12", "p-2");
  iconContainer.classList.add("border-t", "w-2/12", "p-2");
  iconDiv.classList.add("flex" , "justify-left");
  editBtn.classList.add("mr-2");

  // add attrbutes 
  deleteBtn.setAttribute("id",("del "+ indexGen));
  editBtn.setAttribute("id","edit " + indexGen);
  //append to document

    
  document.getElementById("userTable").children[1].appendChild(tr);
  tr.appendChild(index);
  tr.appendChild(addedName);
  tr.appendChild(addedAge);
  tr.appendChild(addedEmail);
  tr.appendChild(iconContainer);
  iconContainer.appendChild(iconDiv);
  iconDiv.appendChild(editBtn);
  iconDiv.appendChild(deleteBtn);
  
  //clear input fields
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("email").value = "";
});

// delete user

let data =document.getElementById("userTable").children[1].children.length;
// console.log(data);


function handleDelete(){
  
  // document.getElementById("editBTN");
  console.log("delete is clicked! ");
  $(.)
  
}

function handleEdit() {
  // document.getElementById("editBTN");
  console.log("edit is clicked!");
}