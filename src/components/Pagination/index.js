import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Pagination({ itens, Page }) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    Page(page);
  }, [page]);

  return (
    <Container>
      {itens > 8 ? (
        <div>
          <button type="submit" onClick={() => setPage(page - 1)}>
            {page === 1 ? null : page - 1}
          </button>
          {page}
          <button type="submit" onClick={() => setPage(page + 1)}>
            {page + 1}
          </button>
        </div>
      ) : (
        <div>{page}</div>
      )}
    </Container>
  );
}

Pagination.defaultProps = {
  itens: 1,
};

Pagination.propTypes = {
  itens: PropTypes.number,
  Page: PropTypes.func.isRequired,
};

// Revisar a chamada de Hooks da página home (má prática)
