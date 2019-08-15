// Code your solution in this file!
function distanceFromHqInBlocks(originBlock) {
  return Math.abs(originBlock - 42);
}

function distanceFromHqInFeet(originBlock) {
  return distanceFromHqInBlocks(originBlock) * 264;
}
