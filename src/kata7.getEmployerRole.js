const getEmployerRole = (employeeName, employees) => {
  return employees
    .filter(employee => employee.name === employeeName)
    .map(employee => employee.role)
    .toString();
};

module.exports = getEmployerRole;
