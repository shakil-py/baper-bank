function get_value_byid(field_id) {
    const get_field = document.getElementById(field_id)
    const str_get_value = get_field.value
    const num_value = parseFloat(str_get_value)
    get_field.value = ""
    return num_value
}
function get_tex_value_byid(text_id) {
    const text_field = document.getElementById(text_id)
    const text_value_str = text_field.innerText
    const num_value = parseFloat(text_value_str)
    return num_value
}
function set_value(text_value_id, input_value, balance_value) {
    const set_text_vlaue = document.getElementById(text_value_id)
    set_text_vlaue.innerText = input_value + balance_value
}







// event function

document.getElementById("withdraw").addEventListener("click", function () {
    const input_value = get_value_byid("withdraw-amount")
    const balance_value = get_tex_value_byid("withdraw-balance")
    const set_text_vlaue = set_value("withdraw-balance", input_value, balance_value)

})