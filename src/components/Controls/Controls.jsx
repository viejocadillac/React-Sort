import React from 'react';
import PropTypes from 'prop-types';
import './Controls.scss';

const Controls = ({
  randomize,
  sort,
  stopSorting,
  isSorting,
}) => (
  <div className="controls">
    <input type="button" disabled={isSorting} value="Randomize" onClick={randomize} />
    <input type="button" disabled={isSorting} value="Sort" onClick={sort} />
    <input type="button" disabled={!isSorting} value="Stop" onClick={stopSorting} />
  </div>
);

Controls.propTypes = {
  randomize: PropTypes.func.isRequired,
  sort: PropTypes.func.isRequired,
  stopSorting: PropTypes.func.isRequired,
  isSorting: PropTypes.bool.isRequired,
};

export default Controls;
