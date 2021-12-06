import { data as dataSet } from './data.js';

const challengeOne = (data) => {
  let distance = 0;
  let depth = 0;

  data.forEach(dataPoint => {
    if (dataPoint?.forward) {
      distance += dataPoint.forward;
    }
    if (dataPoint?.up) {
      depth -= dataPoint.up;
    }
    if (dataPoint?.down) {
      depth += dataPoint.down;
    }
  })

  return distance * depth;
}

console.log(challengeOne(dataSet));