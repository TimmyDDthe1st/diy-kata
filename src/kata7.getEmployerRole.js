const getEmployerRole = (employeeName, employees) => {
  let role;
  employees.forEach(element => {
    if (element.name === employeeName) {
      role = element.role;
    }
  });

  return role;
};

module.exports = getEmployerRole;
