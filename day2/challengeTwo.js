import { data as dataSet } from './data.js';

const challengeTwo = (data) => {
  let horizontalPosition = 0;
  let depth = 0;
  let aim = 0;

  data.forEach(dataPoint => {
    if (dataPoint?.forward) {
      horizontalPosition += dataPoint.forward;
      depth += aim * dataPoint.forward;
    }
    if (dataPoint?.up) {
      aim -= dataPoint.up;
    }
    if (dataPoint?.down) {
      aim += dataPoint.down;
    }
  })

  return horizontalPosition * depth;
}

console.log(challengeTwo(dataSet));
