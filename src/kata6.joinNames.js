const joinNames = namesObj => {
  const namesArray = [];

  if (namesObj.length === 1) {
    return namesObj[0].name;
  }

  namesObj.forEach(element => {
    namesArray.push(element.name);
  });

  const lastName = namesArray.pop();

  return `${namesArray.join(", ")} & ${lastName}`;
};

module.exports = joinNames;
