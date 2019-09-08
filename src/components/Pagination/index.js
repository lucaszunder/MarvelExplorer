import React from 'react';

import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Pagination({ itens, page, setPage }) {
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
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};
