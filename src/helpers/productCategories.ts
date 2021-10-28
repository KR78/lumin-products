import { SelectOptions } from 'src/types';

const categories: SelectOptions = [
  {
    label: 'Filter by',
    value: '',
    disabled: true,
  },
  {
    label: 'All Products',
    value: 'all-products',
  },
  {
    label: 'New Products',
    value: 'new-products',
  },
  {
    label: 'Sets',
    value: 'sets',
  },
  {
    label: 'Skincare',
    value: 'skincare',
  },
  {
    label: 'Hair & Body Care',
    value: 'hair-and-body',
  },
  {
    label: 'Accessories',
    value: 'accessories',
  },
];

export default categories;
