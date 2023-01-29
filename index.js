const employee = {
    name: "ChuckE",
    streetAddress: "155 Sunrise Hwy",
}
  function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj}
    newObj[key] = value
    return newObj
  }
  const newEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "ChuckE",
    "Sam"
  )
  newEmployee.name

  function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value
    return obj
  }
  const nextEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "ChuckE", "Sam")

  function deleteFromEmployeeByKey(obj, key, value) {
    const nextObj = {...obj}
    nextObj[key] = value
    return nextObj
  }
  delete nextObj.name

  function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    obj[key] = value
    return obj
  }
  delete nextObj.name