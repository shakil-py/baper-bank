document.getElementById("Email").addEventListener("keyup", function () {
    const email = document.getElementById("Email").value
    // ancor()
    if (email.includes("@") && pas()) {
        document.getElementById("submit-btn").removeAttribute("disabled")
    }

});
document.getElementById("password").addEventListener("keyup", function pas() {
    let pass = document.getElementById("password").value
    const password = "shakil123"
    if (pass === password) {
        document.getElementById("submit-btn").removeAttribute("disabled")
    }
})

document.getElementById("submit-btn2").addEventListener("mouseenter",function ancor(){
    let ancor= document.getElementById("sumit-btn2").createElemnt("a")
    ancor.href="bank.html"
    document.getElementById("submit-btn2").appendChild(ancor)
})

// const password=document.getElementById("password").value;

// const pass="shakil"
// if(email.includes("@gmail")){
//     document.getElementById("submit-btn").removeAttribute("disabled");
//     console.log("ok")

// }