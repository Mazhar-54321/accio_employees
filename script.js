
let c=0;
function addEmployee(){
  const ageI = document.getElementById("age").value;
  const nameI = document.getElementById("name").value;
  const professionI = document.getElementById("profession").value;
  const errorPara = document.getElementsByClassName("error-message")[0]
  const successPara = document.getElementsByClassName("success-message")[0];
  const zeroEmployeesPara = document.getElementsByClassName("zero-employees")[0];

  if(ageI.trim().length && nameI.trim().length && professionI.trim().length){
    const employeesContainer = document.getElementsByClassName("employees-container")[0];
    const employeeDiv = document.createElement("div");
    employeeDiv.className ="employee-details";
    const id=document.createElement("span");
    id.textContent=c+1;
    c++;
    const name=document.createElement("span");
    name.textContent=`Name:${nameI}`
    const profession=document.createElement("span");
    profession.textContent=`Profession:${professionI}`;
    const age=document.createElement("span");
    age.textContent=`Age:${ageI}`;
    employeeDiv.appendChild(id);
    employeeDiv.appendChild(name);
    employeeDiv.appendChild(profession);
    employeeDiv.appendChild(age);
    //employeeDiv.append([id,name,profession,age]);
    const row = document.createElement("div");
    row.className="row";
    const deleteButton = document.createElement("button");
    deleteButton.innerText="Delete User";
    deleteButton.className="delete-button";
    deleteButton.addEventListener("click",()=>{
      employeesContainer.removeChild(row);
      if(!employeesContainer.childElementCount){
        zeroEmployeesPara.style.display="block";
        successPara.style.display="none";
        errorPara.style.display="none";
      }
      
    })
    row.appendChild(employeeDiv);
    row.appendChild(deleteButton)
   // row.append([employeeDiv,deleteButton])
    employeesContainer.appendChild(row);
    errorPara.style.display="none";
    successPara.style.display="block";
    zeroEmployeesPara.style.display="none";
  }else{
    errorPara.style.display="block"
  }


}
