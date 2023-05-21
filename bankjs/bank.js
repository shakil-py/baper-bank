
document.getElementById("withdraw").addEventListener("click", function () {
    const withdraw_field = document.getElementById("withdraw-amount")
    const withdraw_amount = withdraw_field.value
    withdraw_field.value = ""
    const balance = document.getElementById("balance-amount").innerText
    document.getElementById("withdraw-balance").innerText = parseFloat(withdraw_amount) + parseFloat(document.getElementById("withdraw-balance").innerText)

    document.getElementById("balance-amount").innerText = (parseInt(balance) - withdraw_amount)

})
document.getElementById("diposit").addEventListener("click", function () {
    const diposit_field = document.getElementById("diposit-amount")
    const diposit_amount = diposit_field.value
    diposit_field.value = ""
    const balance = parseInt(document.getElementById("balance-amount").innerText) + parseInt(diposit_amount)
    document.getElementById("balance-amount").innerText = balance
    document.getElementById("diposit-balance").innerText = parseFloat(diposit_amount) + parseFloat(document.getElementById("diposit-balance").innerText)

})