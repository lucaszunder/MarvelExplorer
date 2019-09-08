import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function HeroCard({ name, desc, img }) {
  const [editMode, setEditMode] = useState(false);
  const [heroName, setHeroName] = useState(name);
  const [heroDesc, setHeroDesc] = useState(desc);

  return (
    <Container>
      <img alt={heroName} src={img} />
      <div>
        {editMode === false ? (
          <div>
            <h3>{heroName}</h3>
            <p>{heroDesc}</p>
          </div>
        ) : (
          <div>
            <input
              value={heroName}
              onChange={e => setHeroName(e.target.value)}
            />
            <input
              value={heroDesc}
              onChange={e => setHeroDesc(e.target.value)}
            />
          </div>
        )}
        <button type="submit" onClick={() => setEditMode(!editMode)}>
          Editar
        </button>
      </div>
    </Container>
  );
}

HeroCard.propTypes = {
  desc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
