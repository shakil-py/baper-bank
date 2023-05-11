const email=document.getElementById("Email").value;
const password=document.getElementById("password").value;

const pass="shakil"
if(email.includes("@")){
    document.getElementById("submit-btn").removeAttribute("disabled");
    console.log("ok")

}