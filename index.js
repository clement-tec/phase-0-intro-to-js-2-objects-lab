const employee = {
    name: "John",
    streetAddress: "123street"
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]:value}
  }
  function
  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    const employeeObj = {...employee};
    delete employeeObj[key];
    return employeeObj;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }