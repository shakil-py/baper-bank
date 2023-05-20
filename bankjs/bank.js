
document.getElementById("withdraw").addEventListener("click", function () {
    const withdraw_amount_field = document.getElementById("withdraw-amount").value

    const balance = document.getElementById("balance-amount").innerText

    document.getElementById("withdraw-balance").innerText = parseFloat(withdraw_amount_field) + parseFloat(document.getElementById("withdraw-balance").innerText)
    document.getElementById("balance-amount").innerText = (parseInt(balance) - withdraw_amount_field)
    withdraw_amount_field.value = " "
})
document.getElementById("diposit").addEventListener("click", function () {
    const diposit_amount_field = document.getElementById("diposit-amount").value
    const balance = parseInt(document.getElementById("balance-amount").innerText) + parseInt(diposit_amount_field)
    document.getElementById("balance-amount").innerText = balance
    document.getElementById("diposit-balance").innerText = parseFloat(diposit_amount_field) + parseFloat(document.getElementById("diposit-balance").innerText)
    diposit_amount_field.value = " "
})