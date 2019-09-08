import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Card({ clickable, id, name, img }) {
  return (
    <Container>
      <Link to={clickable ? `/hero/${id}` : null}>
        <img alt="hero" src={img} />
        <h3>{name}</h3>
      </Link>
    </Container>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  clickable: PropTypes.bool.isRequired,
};
