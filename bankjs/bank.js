
document.getElementById("withdraw").addEventListener("click", function () {
    const withdraw_field = document.getElementById("withdraw-amount")
    let withdraw_amount = withdraw_field.value
    if (withdraw_field.value === "") {
        withdraw_amount = 0
        alert("Please Enter amount to Withdraw")
    }
    withdraw_field.value = ""
    const balance = document.getElementById("balance-amount").innerText
    document.getElementById("withdraw-balance").innerText = parseFloat(withdraw_amount) + parseFloat(document.getElementById("withdraw-balance").innerText)

    document.getElementById("balance-amount").innerText = (parseInt(balance) - withdraw_amount)

})
document.getElementById("diposit").addEventListener("click", function () {
    const diposit_field = document.getElementById("diposit-amount")
    let diposit_amount = diposit_field.value
    if (diposit_field.value === "") {
        diposit_amount = 0
        alert("Please Enter amount to Diposid")
    }
    diposit_field.value = ""
    const balance = parseInt(document.getElementById("balance-amount").innerText) + parseInt(diposit_amount)
    document.getElementById("balance-amount").innerText = balance
    document.getElementById("diposit-balance").innerText = parseFloat(diposit_amount) + parseFloat(document.getElementById("diposit-balance").innerText)
})