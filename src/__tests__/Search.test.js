import React from 'react';
import {
  render,
  fireEvent,
  getByPlaceholderText,
  ha,
} from '@testing-library/react';

import Search from '../components/Search';

describe('Testing search bar', () => {
  it('Should be able to return query', () => {
    const { getByPlaceholderText } = render(<Search />);

    fireEvent.change(getByPlaceholderText('Busque seu herói'), {
      target: { value: 'spider-man' },
    });
    expect().toHaveBeenCalled('spider-man');
  });
});
