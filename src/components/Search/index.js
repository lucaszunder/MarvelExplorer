import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Search({ setQuery }) {
  return (
    <Container>
      <input
        onChange={e => setQuery(e.target.value)}
        placeholder="Busque seu herói"
      />
    </Container>
  );
}

Search.propTypes = {
  setQuery: PropTypes.func.isRequired,
};
