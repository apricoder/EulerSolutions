import * as _ from 'lodash';

const romanSigns = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
};

export const decimalToRomanSigns: { [decimal: string]: RomanSign } = Object.keys(romanSigns)
  .reduce((acc, next) => ({ ...acc, [romanSigns[next as RomanSign]]: next, }), {});
export const decimalToRomanLevels = Object.keys(decimalToRomanSigns).map(key => +key);

type RomanSign = keyof typeof romanSigns;
type RomanToDecimalMap = { [roman: string]: number };

const orderedRomanSigns = Object.keys(romanSigns);
const romanSignsIndexes: RomanToDecimalMap = orderedRomanSigns.reduce((acc, next, index) => ({
  ...acc,
  [next]: index,
}), {});

export const subtractableSigns = orderedRomanSigns.filter((sign, index) => index % 2 === 0) as RomanSign[];

export const getSignCombos = (subtractableSign: RomanSign) => {
  if (!_.includes(subtractableSigns, subtractableSign)) {
    throw new Error(`'${subtractableSign}' is not a subtractable roman sign`);
  }
  const index = romanSignsIndexes[subtractableSign];

  const toBeSubtractedFromSigns = [
    orderedRomanSigns[index + 1] as RomanSign,
    orderedRomanSigns[index + 2] as RomanSign
  ];

  return toBeSubtractedFromSigns.filter(sign => sign).map(sign => ({
    [`${subtractableSign}${sign}`]: romanSigns[sign] - romanSigns[subtractableSign]
  }));
};

export const romanToDecimalCombos = _.flatten(
  subtractableSigns.map(getSignCombos)
)
  .reduce((acc: RomanToDecimalMap, next: RomanToDecimalMap) => ({ ...acc, ...next }), {});

const fromRomanTail = (romanNumber: string, sum = 0): number => {
  if (romanNumber.length === 0) {
    return sum;
  }
  if (romanNumber.length === 1) {
    return sum + romanSigns[romanNumber as RomanSign];
  }
  const firstTwo = romanNumber.substring(0, 2);
  const matchedCombo = romanToDecimalCombos[firstTwo];
  if (!_.isNil(matchedCombo)) {
    return fromRomanTail(romanNumber.slice(2), sum + matchedCombo);
  }

  const firstOne = romanNumber[0];
  const matchedSingleSign = romanSigns[firstOne as RomanSign];
  if (!_.isNil(matchedSingleSign)) {
    return fromRomanTail(romanNumber.slice(1), sum + matchedSingleSign);
  }

  throw new Error(`Didn't match '${romanNumber}' to a roman number`);
};

const decimalToRomanCombos: { [decimal: string]: RomanSign } = Object.keys(romanToDecimalCombos)
  .reduce((acc, next) => ({ ...acc, [romanToDecimalCombos[next]]: next }), {});

const fromDecimalTail = (decimalStr: string, accRomanNumber: string): string => {
  if (+decimalStr === 0) {
    return accRomanNumber;
  }

  const fullMatchCombo = decimalToRomanCombos[decimalStr];
  if (fullMatchCombo) {
    return `${fullMatchCombo}${accRomanNumber}`;
  }

  const fullMatchRoman = decimalToRomanSigns[decimalStr];
  if (fullMatchRoman) {
    return `${fullMatchRoman}${accRomanNumber}`;
  }

  const endDecimalComboMatch = Object.keys(decimalToRomanCombos).find(combo => decimalStr.endsWith(combo));
  if (endDecimalComboMatch) {
    const romanCombo = decimalToRomanCombos[endDecimalComboMatch];
    const remainingDecimalStr = `${+decimalStr - +endDecimalComboMatch}`;
    return fromDecimalTail(remainingDecimalStr, `${romanCombo}${accRomanNumber}`)
  }

  const endDecimalSingleMatch = Object.keys(decimalToRomanCombos).find(combo => decimalStr.endsWith(combo));
  if (endDecimalSingleMatch) {
    const romanSign = decimalToRomanCombos[endDecimalSingleMatch];
    const remainingDecimalStr = `${+decimalStr - +endDecimalSingleMatch}`;
    return fromDecimalTail(remainingDecimalStr, `${romanSign}${accRomanNumber}`)
  }

  const firstZeroIndex = decimalStr.indexOf(`0`);
  const complexDecimalToConvert = decimalStr.endsWith(`0`) && firstZeroIndex > 0 ? decimalStr.slice(firstZeroIndex - 1) : decimalStr.slice(-1);
  const complexValue = +complexDecimalToConvert;

  let complexValueLeft = complexValue;
  let accComplexRoman = '';

  while (complexValueLeft > 0) {
    const firstHigherLevelDecimalIndex = decimalToRomanLevels.findIndex(decimal => +decimal > complexValueLeft);
    const lastDecimalLessThanValue = firstHigherLevelDecimalIndex > 0 ? decimalToRomanLevels[firstHigherLevelDecimalIndex - 1] : _.last(decimalToRomanLevels);
    if (_.isNil(lastDecimalLessThanValue)) {
      throw new Error(`Can't convert '${complexDecimalToConvert}'`);
    }

    const romanSign = decimalToRomanSigns[`${lastDecimalLessThanValue}`];
    const times = Math.floor(complexValueLeft / lastDecimalLessThanValue);
    accComplexRoman += Array(times + 1).join(romanSign);
    complexValueLeft -= times * lastDecimalLessThanValue;
  }

  const remainingDecimal = `${+decimalStr - complexValue}`;
  return fromDecimalTail(remainingDecimal, `${accComplexRoman}${accRomanNumber}`);
};

export const fromRoman = (romanNumber: string): number => {
  return fromRomanTail(romanNumber);
};

export const fromDecimal = (decimal: number): string => {
  return fromDecimalTail(`${decimal}`, ``);
}
