// document.getElementById("Email").addEventListener("focuse", function () {
//     const email = document.getElementById("Email").value
//     // ancor()
//     if (email.includes("@") && pas()) {
//         document.getElementById("submit-btn").removeAttribute("disabled")
//     }

// });
// document.getElementById("password").addEventListener("keyup", function pas() {
//     let pass = document.getElementById("password").value
//     const password = "shakil123"
//     if (pass === password) {
//         document.getElementById("submit-btn").removeAttribute("disabled")
//     }
// })

// document.getElementById("submit-btn2").addEventListener("click",function ancor(){
//     console.log("clicked")
//     HTMLAnchorElement("bank.html")

// })

// const password=document.getElementById("password").value;

// const pass="shakil"
// if(email.includes("@gmail")){
//     document.getElementById("submit-btn").removeAttribute("disabled");
//     console.log("ok")

// }

document.getElementById("submit-btn").addEventListener("click", function () {
    const email_field = document.getElementById("Email")
    const email = email_field.value
    const password_field = document.getElementById("password")
    const password = password_field.value

    if (email === "shakil@gmail.com" && password === "123") {
        window.location.href = "bank.html"
    }
    else {
        alert("You are not valid user")
    }

})