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
