import {
  Currency,
} from 'src/types';

const currenyOptions = Object.values(Currency)
  .map((val) => ({
    label: val,
    value: val,
    selected: val === Currency.USD,
  } as {
    label: string,
    value: string,
  }))
  .filter((l) => typeof l.label === 'string');

export default currenyOptions;
