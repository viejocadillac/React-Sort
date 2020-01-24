import React from 'react';
import PropTypes from 'prop-types';
import './Graph.scss';

const Column = ({ height, i }) => <div key={`${height}-${i}`} className="columna" style={{ height }} />;
Column.propTypes = {
  height: PropTypes.number.isRequired,
  i: PropTypes.number.isRequired,
};


const Graph = ({ array }) => (
  <div className="container">
    {array.length > 1
      ? array.map((num, i) => <Column key={`column-${num}-${i + 1}`} height={num} className="columna" i={i} />)
      : null}
  </div>
);

Graph.propTypes = {
  array: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Graph;
