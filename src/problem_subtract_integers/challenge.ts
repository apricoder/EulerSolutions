import * as _ from "lodash";

const stripZeroPrefix = (reversed: string) => {
  const prefixToCropLength: number = reversed.split('').findIndex(c => c !== '0');
  if (prefixToCropLength < 0) {
    return '0';
  }
  return reversed.substring(prefixToCropLength);
};

const reversedSubtractionArr = (acsStrs: string[], bcsStrs: string[]): string[] =>
  acsStrs.reduce((resultStr, acStr, index) => {
    let ac = +acStr;
    const bc = +bcsStrs[index] || 0;
    if (+ac < bc) {
      ac = 10 + ac;
      acsStrs[index + 1] = `${+acsStrs[index + 1] - 1}`;
    }
    const diff = +ac - +bc;
    return [ ...resultStr, `${diff}` ];
  }, [] as string[]);

export const subtract = (a: string, b: string): string => {
  if (a.startsWith('-') || b.startsWith('-')) {
    throw new Error('Only positive integer input supported, sorry!');
  }

  const _a = stripZeroPrefix(a);
  const _b = stripZeroPrefix(b);

  /* if second number is longer - flip sides and add '-' prefix */
  if (_a.length < _b.length) {
    return `-${subtract(b, a)}`;
  }

  const aStrs = _a.split('');
  const bStrs = _.padStart(_b, _a.length, '0').split('');

  /* if second number is larger - flip sides and add '-' prefix */
  const idxWhereAcIsLarger = aStrs.findIndex((ac, i) => +ac > +bStrs[i]);
  const idxWhereBcIsLarger = aStrs.findIndex((ac, i) => +ac < +bStrs[i]);
  const secondIsLarger = idxWhereBcIsLarger >= 0 && (idxWhereAcIsLarger < 0 || idxWhereBcIsLarger < idxWhereAcIsLarger);
  if (secondIsLarger) {
    return `-${subtract(b, a)}`;
  }

  /* reverse, subtract ciphers one by one starting from the tail */
  const aRevStrs = _.reverse(stripZeroPrefix(a).split(''));
  const bRevStrs = _.reverse(stripZeroPrefix(b).split(''));
  const reversedSubtractionResult = reversedSubtractionArr(aRevStrs, bRevStrs);
  const subtractionResult = _.reverse(reversedSubtractionResult).join('');
  return stripZeroPrefix(subtractionResult);
};
