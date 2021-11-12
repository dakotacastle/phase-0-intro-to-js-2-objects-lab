// Write your solution in this file!
const employee = {
    name: "llama",
    streetAddress: "street",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const copyOfEmployees = {...employee}
    copyOfEmployees[key] = value
    return copyOfEmployees
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const copyOfEmployees = {...employee}
    delete copyOfEmployees[key]
    return copyOfEmployees
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}