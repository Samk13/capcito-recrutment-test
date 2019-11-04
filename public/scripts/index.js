const form = document.getElementById("userForm");
const table = document.getElementById("userTable");

const tableBody = document.querySelector('#userTable > tbody');
function loadJsonData(){
  const req = new XMLHttpRequest();

  req.open("get", "data/data.json");
  req.onload = ()=> {
    
    try {
      const json = JSON.parse(req.responseText);
      populateData(json);
    } catch(e){
      console.warn("Could not load JSON! 😐")
    }
  }
  req.send();
}

function populateData(json){
  console.log(json);
  
  // clear existing HTML 
  while (tableBody.firstChild){
    tableBody.removeChild(tableBody.firstChild);
  }

  // populate table
  json.forEach((row)=> {

   
    console.log("---" + row[1]);
    
    const tr = document.createElement("tr");
  
    row.forEach((cell)=> {
      console.log(cell);
      const td = document.createElement("td");
      td.textContent = cell;
      
      tr.appendChild(td);
      
    } )
    
    tableBody.appendChild(tr);
  })
  
}

document.addEventListener("DOMContentLoaded", ()=>{loadJsonData();});
