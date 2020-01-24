import React from 'react';
import PropTypes from 'prop-types';


const ShowAlgorithm = ({ defAlgoritmo, algoritmos, items }) => {
  const [selectedAlgoritmo, setSelectedAlgoritmo] = React.useState(defAlgoritmo);

  const optionSelected = (event) => {
    setSelectedAlgoritmo(event.target.value);
  };

  return (
    <>
      <select value={selectedAlgoritmo} name="selectAlgoritmo" id="select" onChange={optionSelected}>
        {
          algoritmos.map((algoritmo) => (
            <option
              key={`option-${algoritmo.value}`}
              value={algoritmo.value}
            >
              {algoritmo.name}
            </option>
          ))
        }
      </select>
      {
        algoritmos.map((algoritmo) => {
          if (algoritmo.value === selectedAlgoritmo) {
            return React.cloneElement(algoritmo.component, { items, key: algoritmo.value }, null);
          }
          return null;
        })
      }
    </>
  );
};


ShowAlgorithm.propTypes = {
  defAlgoritmo: PropTypes.string.isRequired,
  algoritmos: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    name: PropTypes.string,
    component: PropTypes.element,
  })).isRequired,
  items: PropTypes.number.isRequired,
};


export default ShowAlgorithm;
