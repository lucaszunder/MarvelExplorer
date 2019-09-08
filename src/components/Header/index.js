import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="MarvelApp" />
      </Link>
    </Container>
  );
}
