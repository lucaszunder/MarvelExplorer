import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Search({ search }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    search(query);
  }, [query]);

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
  search: PropTypes.func.isRequired,
};
