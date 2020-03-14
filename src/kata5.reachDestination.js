const reachDestination = (distance, speed) => {
  let minutes = distance / speed;
  minutes *= 60;

  return `I will arrive in ${minutes} minutes`;
};

module.exports = reachDestination;
