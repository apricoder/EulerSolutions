module.exports = (min, max, step = 1) => {
  let next = min, acc = [];
  do acc.push(next);
  while ((next += step) < max);
  return acc;
};