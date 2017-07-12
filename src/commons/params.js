'use strict';

const requireOnlyNumbers = (params) => {
  if (params.some(p => typeof p !== 'number')) {
    throw new Error('Invalid parameters:', `Non-number parameter passed`);
  }
};

const requireMinCount = (minCount,params) => {
  if (params.length < minCount) {
    throw new Error('Invalid parameters:', 'Minimal required params count is', minCount);
  }
};

module.exports = {
  requireMinCount,
  requireOnlyNumbers
};
