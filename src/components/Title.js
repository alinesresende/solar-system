/* eslint-disable react/require-default-props */
import PropTypes, { string } from 'prop-types';
import React from 'react';
import '../App.css';

// Requiremente 3
class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2 className="titlePlanetAndMission">
        { headline }
      </h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.shape(string).isRequired,
};

export default Title;
