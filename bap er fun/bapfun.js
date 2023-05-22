function get_value_byid(field_id) {
    const get_field = document.getElementById(field_id)
    const str_get_value = get_field.value
    const num_value = parseInt(str_get_value)
    get_field.value = ""
    return num_value
}
function get_tex_value_byid(text_id) {
    const text_field = document.getElementById(text_id)
    const text_value_str = text_field.innerText
    const num_value = parseInt(text_value_str)
    return num_value
}
function set_text_value(text_value_id, input_value, balance_value) {
    const set_text_value = document.getElementById(text_value_id)
    set_text_value.innerText = input_value + balance_value
}
function set_balance_value(balance_text_id, input_value, balance_text_value, compare_id) {
    const set_balance_field = document.getElementById(balance_text_id)
    const compare = document.getElementById(compare_id).innerText


    if (compare === "Withdraw") {
        set_balance_field.innerText = balance_text_value - input_value

    }
    else if (compare === "Diposit") {
        set_balance_field.innerText = input_value + balance_text_value
    }
}

// event function

document.getElementById("withdraw").addEventListener("click", function () {
    const input_value = get_value_byid("withdraw-amount")
    const withdraw_balance_value = get_tex_value_byid("withdraw-balance")
    const balance_text_value = get_tex_value_byid("balance-amount")
    set_text_value("withdraw-balance", input_value, withdraw_balance_value)
    set_balance_value("balance-amount", input_value, balance_text_value, "withdraw")
})
document.getElementById("diposit").addEventListener("click", function () {
    const input_value = get_value_byid("diposit-amount")
    const diposit_balance_value = get_tex_value_byid("diposit-balance")
    const balance_text_value = get_tex_value_byid("balance-amount")
    set_text_value("diposit-balance", input_value, diposit_balance_value)
    set_balance_value("balance-amount", input_value, balance_text_value, "diposit")
})