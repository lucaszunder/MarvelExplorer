import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HeroCard from '../../components/HeroCard';
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';

import * as seriesActions from '../../store/modules/series/actions';

import { Container } from './styles';

export default function Hero({ match }) {
  const series = useSelector(state => state.series);
  const heroes = useSelector(state =>
    state.heroes
      ? state.heroes.results.filter(hero => hero.id == match.params.id)
      : null
  );
  const [page, setPage] = useState(1);
  const steps = page > 1 ? (page - 1) * 8 : 0;

  const dispatch = useDispatch();

  function searchSeries(id, step) {
    setTimeout(() => {
      dispatch(seriesActions.seriesRequest(id, step));
    }, 500);
  }

  useEffect(() => {
    searchSeries(match.params.id, steps);
  }, [page]);

  return (
    <Container>
      {series.results ? (
        <HeroCard
          name={heroes[0].name}
          desc={heroes[0].description}
          img={`${heroes[0].thumbnail.path}.${heroes[0].thumbnail.extension}`}
          id={match.params.id}
        />
      ) : (
        <div>Carregando</div>
      )}
      <ul>
        {series.results
          ? series.results.map(serie => (
              <Card
                clickable={false}
                id={serie.id}
                key={serie.id}
                name={serie.title}
                img={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
              />
            ))
          : null}
      </ul>
      {series ? (
        <Pagination itens={series.total} page={page} setPage={setPage} />
      ) : null}
    </Container>
  );
}
