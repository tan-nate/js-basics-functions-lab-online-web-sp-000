// Code your solution in this file!
function distanceFromHqInBlocks(originBlock) {
  return Math.abs(originBlock - 42);
}

function distanceFromHqInFeet(originBlock) {
  return distanceFromHqInBlocks(originBlock) * 264;
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  return Math.abs((endingBlock - startingBlock) * 264);
}

function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) <= 400) {
    return 0;
  } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
    return 0.02 * (distanceTravelledInFeet(start, destination) - 400);
  } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
