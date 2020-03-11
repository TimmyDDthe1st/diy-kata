const reachDestination = (distance, speed) => {
  let hours = 0;
  let minutes = distance / speed;
  minutes *= 60;

  if (minutes % 60 === 0) {
    hours += 1;
    minutes = 0;
  }

  return `I will arrive in ${hours} hour ${minutes} minutes`;
};

module.exports = reachDestination;
