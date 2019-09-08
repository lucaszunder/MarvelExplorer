import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../../components/Card';
import { Container } from './styles';
import Pagination from '../../components/Pagination';
import Search from '../../components/Search';
import * as heroesActions from '../../store/modules/heroes/actions';

export default function Home() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const heroes = useSelector(state => state.heroes);
  const steps = page > 1 ? (page - 1) * 8 : 0;

  const dispatch = useDispatch();

  function searchHero(search, step) {
    setTimeout(() => {
      dispatch(heroesActions.searchRequest(search, step));
    }, 500);
  }

  useEffect(() => {
    searchHero(query);
    setPage(1);
  }, [query]);

  useEffect(() => {
    searchHero(query, steps);
  }, [page]);

  return (
    <Container>
      <Search searchHero={searchHero} query={query} setQuery={setQuery} />
      <ul>
        {heroes.results
          ? heroes.results.map(hero => (
              <Card
                clickable
                id={hero.id}
                key={hero.id}
                name={hero.name}
                img={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
              />
            ))
          : null}
      </ul>
      {heroes ? (
        <Pagination itens={heroes.total} page={page} setPage={setPage} />
      ) : null}
    </Container>
  );
}

Search.proTypes = {
  searchHero: PropTypes.func,
};
