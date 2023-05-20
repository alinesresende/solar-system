/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React from 'react';
import '../App.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, classImg } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">
          { planetName }
        </p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } className={ classImg } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.shape({
    img: PropTypes.string,
  }).isRequired,
  planetName: PropTypes.shape({
    p: PropTypes.string,
  }).isRequired,
  classImg: PropTypes.string.isRequired,
};

export default PlanetCard;
