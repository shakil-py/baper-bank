
document.getElementById("withdraw").addEventListener("click", function () {
    const withdraw_amount = document.getElementById("withdraw-amount").value
    
    const balance = document.getElementById("balance-amount").innerText
    
    document.getElementById("withdraw-balance").innerText = withdraw_amount
    document.getElementById("balance-amount").innerText = (parseInt(balance) - withdraw_amount)
})
document.getElementById("diposit").addEventListener("click", function () {
    const diposit_amount = document.getElementById("diposit-amount").value
    
    const balance = parseInt(document.getElementById("balance-amount").innerText) + parseInt(diposit_amount)
    document.getElementById("balance-amount").innerText = balance
    document.getElementById("diposit-balance").innerText = diposit_amount
})